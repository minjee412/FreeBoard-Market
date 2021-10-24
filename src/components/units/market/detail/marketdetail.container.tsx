import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MarketDetailPresenter from "./marketdetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./marketdetail.query";

export default function MarketDetailContainer() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  // function aaa() {
  //   router.push(`/market/${router.query.useditemId}/edit`);
  // }

  function onClickDelete() {
    try {
      deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      alert("삭제 되었습니다.");
      router.push("/market");
    } catch (error) {
      alert("권한이 없습니다.");
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=830cd65c89f818fa899bf1125babe987";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lng,
            data?.fetchUseditem.useditemAddress?.lat
          ), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // interface IMouseEvent {
        //   latLng: any;`````````````````````
        // }

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // // 클릭한 위도, 경도 정보를 가져옵니다
            // const latlng = mouseEvent.latLng;
            // console.log(latlng);
            // console.log(latlng.La);
            // // 마커 위치를 클릭한 위치로 옮깁니다
            // marker.setPosition(latlng);
            // var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";
            // var resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  });
  return <MarketDetailPresenter data={data} onClickDelete={onClickDelete} />;
}
