import React from "react";
import styled from "styled-components";
import { Grid, Button, Text, Input } from "common";

const NoticeInfo = () => {
	return (
		<>
			<Grid bg="#d3d3d36b" height="35rem" column isFlex align="center">
				<Main>
					<Header>
						<Text bold="700" size="1.1rem">
							정보고시 생성 순서
						</Text>
						<button
							style={{
								border: "1px solid #e3e3e3",
								width: "3rem",
								height: "2rem",
							}}
						>
							삭제
						</button>
					</Header>
					<div>
						<InfoOptions>
							<Text textType="span" textAlign="initial">
								제품명 / 중량
							</Text>
							<Input
								placeholder="제품명 / 중량을 입력해 주세요."
								width="35rem"
								textIndent="1rem"
							/>
						</InfoOptions>
						<InfoOptions>
							<Text textType="span" textAlign="initial">
								원산지 / 원재료 함량
							</Text>
							<Input
								placeholder="원산지 / 원재 함량을 입력해 주세요."
								width="35rem"
								textIndent="1rem"
							/>
						</InfoOptions>
						<InfoOptions>
							<Text textType="span" textAlign="initial">
								등급
							</Text>
							<Input
								placeholder="등급 (근내지방도 수치)를 입력해 주세요."
								width="35rem"
								textIndent="1rem"
							/>
						</InfoOptions>
						<InfoOptions>
							<Text textType="span" textAlign="initial">
								보관
							</Text>
							<Input
								placeholder="보관 방식을 입력해 주세요."
								width="35rem"
								textIndent="1rem"
							/>
						</InfoOptions>
						<InfoOptions>
							<Text textType="span" textAlign="initial">
								식품 유형
							</Text>
							<Input
								placeholder="식품 유형을 입력해 주세요. (ex) 포장육"
								width="35rem"
								textIndent="1rem"
							/>
						</InfoOptions>
						<InfoOptions>
							<Input
								placeholder="항목 제목 자유 입력"
								width="17rem"
								textIndent="1rem"
							/>
							<Input
								placeholder="내용을 입력해주세요."
								width="27.8rem"
								textIndent="1rem"
							/>
							<button
								style={{
									border: "1px solid #e3e3e3",
									width: "6rem",
									height: "2.5rem",
									color: "red",
									fontWeight: "bold",
								}}
							>
								삭제
							</button>
						</InfoOptions>
						<Button
							width="10rem"
							bg="transparent"
							color="#352f6e"
							border="1px solid #ebebeb"
							bold="700"
						>
							+ 항목 추가
						</Button>
					</div>
				</Main>
				<Footer>
					<Button
						width="100%"
						bg="transparent"
						color="#352f6e"
						border="1.5px solid #352f6e"
						fontWeight="bold"
					>
						+ 정보고시 추가
					</Button>
				</Footer>
			</Grid>
		</>
	);
};

const Main = styled.div`
	height: 80%;
	text-align: center;
	width: 95%;
	background: #fff;
	margin: 1.5rem;
	padding: 1rem 2rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
`;

const InfoOptions = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.7rem;
`;

const Footer = styled.div`
	width: 95%;
`;

export default NoticeInfo;
