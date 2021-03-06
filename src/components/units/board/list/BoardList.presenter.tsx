import {
  Page,
  Pagenation,
  ColumnHeaderTitle1,
  ColumnHeaderTitle,
  ColumnHeaderBasic,
  Row,
  TableBottom,
  TableTop,
  Wrapper,
  Footer,
  Button,
  PencilIcon,
  Search_Wrapper,
  Search_Input,
  Search_Button,
  Myword,
  Title,
  BestContents,
  Top,
  Img,
  Info,
  InfoTitle,
  InfoBottom,
  InfoBottomLeft,
  InfoBottomRight,
  Profile,
  ProfileImg,
  ProfileName,
  Date,
  Like,
  EmptyImg,
} from "./BoardList.styles";

import { v4 as uuidv4 } from "uuid";
import { withAuth } from "../../../commons/withAuth";

const BoardListUI = (props: any) => {
  return (
    <Wrapper>
      <Title>베스트 게시글</Title>

      <Top>
        {props.bestBoardData?.fetchBoardsOfTheBest.map((el: any) => (
          <BestContents
            key={el._id}
            id={el._id}
            onClick={props.onClickBestBoard}
          >
            {el.images[0] ? (
              <Img src={`https://storage.googleapis.com/${el.images[0]}`} />
            ) : (
              <EmptyImg />
            )}
            <Info>
              <InfoTitle>
                {el.title.length > 15
                  ? el.title.slice(0, 16) + "..."
                  : el.title}
              </InfoTitle>
              <InfoBottom>
                <InfoBottomLeft>
                  <Profile>
                    <ProfileImg src="/avatar.png" />
                    <ProfileName>{el.writer}</ProfileName>
                  </Profile>
                  <Date>{el.createdAt.slice(0, 10)}</Date>
                </InfoBottomLeft>
                <InfoBottomRight>
                  <Like src="/thumb-up.png" />
                  <div>{el.likeCount}</div>
                </InfoBottomRight>
              </InfoBottom>
            </Info>
          </BestContents>
        ))}
      </Top>

      <Search_Wrapper>
        <Search_Input
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearch}
        ></Search_Input>
        <Search_Button onClick={props.onClickSearch}>검색하기</Search_Button>
      </Search_Wrapper>

      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle1>제목</ColumnHeaderTitle1>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el: any, index: any) => (
        <Row key={el._id} id={el._id} onClick={props.onClickRow}>
          {/* 
                    이번트 버블링: 자식 (title, writer, createdAt)중 아무곳에나 클릭(이벤트) 해도
                    부모에게 이벤트가 전파 되어, 부모에서 설정한 function이 실행 된다(currentTarget) 
                */}
          <ColumnHeaderBasic>{10 - index}</ColumnHeaderBasic>
          <ColumnHeaderTitle>
            {el.title
              .replaceAll(props.mySearch, `#$%${props.mySearch}#$%`)
              .split("#$%")
              .map((el: any) => (
                <Myword key={uuidv4} isMatched={props.mySearch === el}>
                  {el}
                </Myword>
              ))}
          </ColumnHeaderTitle>
          <ColumnHeaderBasic>{el.writer}</ColumnHeaderBasic>
          <ColumnHeaderBasic>{el.createdAt.slice(0, 10)}</ColumnHeaderBasic>
        </Row>
      ))}
      <TableBottom />

      <Footer>
        <Pagenation>
          <Page onClick={props.onClickPrevPage}> 이전 </Page>
          {/* 1,1,1,1,1,1,1,1,1,1 은 배열이 10개라는걸 표시해주기 위함(그 외 쓸모는 없다.) */}
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          {/* {[1,1,1,1,1,1,1,1,1,1].map((_,index) => (
                    <Page key={props.startPage+index} onClick={props.onClickPage} id={String(props.startPage+index)}>
                        {props.startPage+index}
                    </Page>
                    ))} */}

          <Page onClick={props.onClickNextPage}> 다음 </Page>
        </Pagenation>
        <Button onClick={props.onClickMoveToRegi}>
          <PencilIcon src="/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
};
export default withAuth(BoardListUI);
