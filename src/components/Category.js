import React, { useState, useCallback, useRef } from "react";
import CATEGORY from "utils/categoryData";
import { Grid, Text, Button } from "common";
import { bg, border } from "styles/palette";

const Category = ({ setCategory }) => {
  const [selectedTag, setSelectedTag] = useState([]);
  const checkboxRef = useRef(null);

  const handleDelete = useCallback(
    (deleteValue, e) => {
      const deleteTagIndex = selectedTag.indexOf(deleteValue);
      setSelectedTag(
        selectedTag.filter((tag) => selectedTag[deleteTagIndex] !== tag)
      );

      checkboxRef.current.querySelectorAll("input").forEach((box) => {
        if (
          box.value ===
          e?.target.innerText.substring(0, e.target.innerText.length - 2)
        ) {
          box.checked = false;
        }
      });

      setCategory((selectedTag) => [...selectedTag]);
    },
    [selectedTag, setCategory]
  );

  const handleCheck = useCallback(
    (e) => {
      const value = e.target.value;
      const checked = e.target.checked;

      if (checked && !selectedTag.includes(value)) {
        setSelectedTag([...selectedTag, value]);
      } else if (!checked && selectedTag.includes(value)) {
        handleDelete(value);
      }

      setCategory((selectedTag) => [...selectedTag]);
    },
    [selectedTag, setSelectedTag, handleDelete, setCategory]
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
            _ref={checkboxRef}
            scrollYW
          >
            {CATEGORY.map((item, idx) => {
              return (
                <Grid key={idx} isFlex align="center" margin="0 0 0.6rem">
                  <input
                    id="check"
                    type="checkbox"
                    value={item}
                    onChange={handleCheck}
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
                      _onClick={(e) => handleDelete(item, e)}
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
