import BasicButton from "../../../commons/button/basic";
import WriterInfo from "../../../commons/div/writerinfo";
import Grey18Font from "../../../commons/font_div/18px_lightgrey";
import Black24Font from "../../../commons/font_div/24px_black";
import Black36Font from "../../../commons/font_div/36px_black";
import {
  Btn_Wrapper,
  Carousel,
  Contents,
  Image30x28,
  Img,
  LikeWrapper,
  Map,
  PartWrapperColumn,
  PartWrapperRow,
  Tags,
  TitleWrapper,
  Wrapper,
} from "./marketdetail.styles";

export default function MarketDetailPresenter(props) {
  return (
    <Wrapper>
      <PartWrapperRow>
        <WriterInfo
          name={props.data?.fetchUseditem.seller.name}
          date={`Date: ${props.data?.fetchUseditem.createdAt.slice(0, 10)}`}
        />
        <span>
          <Img src="/board/detail/link.png" />
          <Img src="/board/detail/location.png" />
        </span>
      </PartWrapperRow>

      <PartWrapperColumn>
        <TitleWrapper>
          <span
            style={{ display: "flex", flexDirection: "column", margin: "8px" }}
          >
            <Grey18Font name={props.data?.fetchUseditem.remarks} />
            <Black24Font name={props.data?.fetchUseditem.name} />
          </span>
          <LikeWrapper>
            <Image30x28 src="/하트.png" />
            <span>{props.data?.fetchUseditem.pickedCount}</span>
          </LikeWrapper>
        </TitleWrapper>
        <TitleWrapper>
          <Black36Font name={`${props.data?.fetchUseditem.price}원`} />
        </TitleWrapper>
        <Carousel>캐러셀</Carousel>
        <Contents>{props.data?.fetchUseditem.contents}</Contents>
        <Tags>asdfasdf</Tags>
      </PartWrapperColumn>

      <PartWrapperColumn>
        <Map>지도</Map>
      </PartWrapperColumn>

      <Btn_Wrapper>
        <BasicButton name="목록으로" id="/market" />
        <BasicButton name="구매하기" />
      </Btn_Wrapper>
    </Wrapper>
  );
}
