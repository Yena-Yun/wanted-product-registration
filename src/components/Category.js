import React, { useState, useCallback, useRef } from "react";
import CATEGORY from "utils/categoryData";
import { Grid, Text, Button } from "common";
import { bg, border } from "styles/palette";

const Category = ({ setCategory }) => {
  const [selectedTag, setSelectedTag] = useState([]);
  const inputRef = useRef(null);

  const onDeleteTag = useCallback(
    (deleteTag, e) => {
      setSelectedTag(selectedTag.filter((tag) => deleteTag !== tag));

      inputRef.current.querySelectorAll("input").forEach((input) => {
        if (
          input.value ===
          e?.target.innerText.substring(0, e.target.innerText.length - 2)
        ) {
          input.checked = false;
        }
      });

      setCategory((selectedTag) => [...selectedTag]);
    },
    [selectedTag, setCategory]
  );

  const checkHandler = useCallback(
    (e) => {
      const value = e.target.value;
      const checked = e.target.checked;

      if (checked && !selectedTag.includes(value)) {
        setSelectedTag([...selectedTag, value]);
      } else if (!checked && selectedTag.includes(value)) {
        const deleteTagId = selectedTag.indexOf(value);
        onDeleteTag(selectedTag[deleteTagId]);
      }

      setCategory((selectedTag) => [...selectedTag]);
    },
    [selectedTag, setSelectedTag, onDeleteTag, setCategory]
  );

  return (
    <Grid isFlex column borderBottom>
      <Grid isFlex height="20rem">
        <Grid width="10rem" bg={bg.field} padding="1rem 0 0 1rem">
          <Text bold>카테고리 *</Text>
        </Grid>
        <Grid isFlex padding="0.8rem">
          <Grid
            width="50%"
            border
            padding="0.8rem 1.2rem"
            margin="0 1rem 0 0"
            _ref={inputRef}
            scrollYW
          >
            {CATEGORY.map((item, idx) => {
              return (
                <Grid key={idx} isFlex align="center" margin="0 0 0.6rem">
                  <input
                    id="check"
                    type="checkbox"
                    value={item}
                    onChange={checkHandler}
                  />
                  {item}
                </Grid>
              );
            })}
          </Grid>

          {selectedTag.length > 0 ? (
            <Grid width="50%" padding="0.8rem 1.2rem" border scrollY>
              {selectedTag.map((item, idx) => {
                return (
                  <Grid key={idx} isFlex align="center" margin="0 0 0.6rem">
                    <Button
                      _onClick={(e) => onDeleteTag(item, e)}
                      border={border.button}
                      bg={bg.category}
                    >
                      {item} X
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid
              width="50%"
              padding="0.8rem 1.2rem"
              border
              scrollY
              isFlex
              justify="center"
              align="center"
            >
              <Text>카테고리를 지정해주세요.</Text>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;
