import { ArrowLeft } from '@realdangol/jjindangol-ui';
import React from 'react';

import useDrawer from '@/hooks/useDrawer';

const StoreInfo = () => {
  const drawer = useDrawer();

  return (
    <div className="max-h-dvh overflow-auto scrollbar-hide">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-neutral-100">
        <div className="max-w-[480px] mx-auto">
          <div className="relative h-[56px] flex items-center justify-center">
            <button className="absolute left-[12px]" onClick={drawer.pop}>
              <ArrowLeft />
            </button>
            <h1 className="typo-h2 text-neutral-800">가게정보 / 원산지</h1>
          </div>
        </div>
      </header>
      <div className="mt-[56px] pb-[256px]">
        <div className="p-4 border-b border-neutral-100">
          <div className="flex flex-col gap-4">
            <span className="typo-body1-bold text-neutral-800">한골한상</span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">상호명</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">
                  단골한상 역삼1동점
                </span>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">주소</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">
                  서울시 역삼동 12-45 단골타워 101호
                </span>
              </div>
              <div className="flex justify-between gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">운영시간</span>
                <div className="flex flex-col gap-1 typo-body2-medium text-neutral-800 flex-1">
                  <span>월요일</span>
                  <span>화요일</span>
                  <span>수요일</span>
                  <span>목요일</span>
                  <span>금요일</span>
                  <span>토요일</span>
                  <span>일요일</span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">휴무일</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">
                  공휴일 및 매주 월요일
                </span>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">전화번호</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">123-456-7890</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-neutral-100">
          <div className="flex flex-col gap-4">
            <span className="typo-body1-bold text-neutral-800">사업자 정보</span>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">대표자명</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">김단골</span>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">상호명</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">
                  서울시 역삼동 12-45 단골타워 101호
                </span>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">사업자 주소</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">
                  서울시 역삼동 12-45 단골타워 101호
                </span>
              </div>
              <div className="flex justify-between items-center gap-10">
                <span className="w-[94px] typo-body2-medium text-neutral-600">사업자등록번호</span>
                <span className="flex-1 typo-body2-medium text-neutral-800">123-45-684646</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-neutral-100">
          <div className="flex flex-col gap-4">
            <span className="typo-body1-bold text-neutral-800 py-2.5">원산지 정보</span>
            <p className="typo-body2-medium text-neutral-600">
              쌀(국내산) 김밥 미국산스팸 스페인산 김밥 캐나다산참치 원양산 김밥배추 중국산 배추김치
              중국산고추가루 국내산 배추김치소고기(고명) 호주산 잔치국수우차돌미국산 차돌
              우동돼지고기 국내산 돈까스돼지고기 갈비만두닭고기 국내 산 불닭만두콩중국산, 미국산
              콩국수
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
