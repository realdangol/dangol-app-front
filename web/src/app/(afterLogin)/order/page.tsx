'use client';

import { ArrowRight, Badge, Button, DiscountCouponFilled, Time } from '@realdangol/jjindangol-ui';
import { useRouter } from 'next/navigation';
import React from 'react';

import { BottomFixed, Header } from '../_components';

const OrderPage = () => {
  const router = useRouter();

  return (
    <>
      <Header title="주문하기" onBackClick={router.back} />
      <div className="w-full">
        <div className="mt-[56px] p-4 pb-[128px] flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="typo-body3-regular text-neutral-600">배달</span>
            <div className="flex items-center gap-1">
              <Time size="16" />
              <span className="typo-body3-regular text-neutral-600">25 ~ 40분 후 도착</span>
            </div>
          </div>
          <div className="p-4 border border-neutral-200 rounded-lg flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="typo-body2-bold">배달주소</span>
                <button className="flex items-center typo-element6 text-neutral-600" type="button">
                  변경하기
                  <ArrowRight size="16" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <span className="typo-label">강남구 역삼로 19길 7-14</span>
                <span className="typo-element5 text-neutral-600">
                  감자탕이랑 디저트 39 사이골목
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="typo-body2-bold">연락처</span>
                <button className="flex items-center typo-element6 text-neutral-600" type="button">
                  변경하기
                  <ArrowRight size="16" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <span className="typo-label">010-1234-5678</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="typo-body2-bold">요청사항</span>
                <button className="flex items-center typo-element6 text-neutral-600" type="button">
                  변경하기
                  <ArrowRight size="16" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-9">
                  <span className="typo-label">가게사장님</span>
                  <span className="typo-element5 text-neutral-600">
                    감자탕이랑 디저트 39 사이골목
                  </span>
                </div>
                <div className="flex items-center gap-9">
                  <span className="typo-label">배달기사님</span>
                  <span className="typo-element5 text-neutral-600">
                    감자탕이랑 디저트 39 사이골목
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border border-neutral-200 rounded-lg flex flex-col gap-4">
            <span className="typo-body2-bold">쿠폰</span>
            <div className="py-2.5 px-4 border border-brand-200 rounded-lg flex items-center gap-3">
              <div className="size-[28px] bg-brand-200 text-brand-700 flex items-center justify-center rounded-full">
                <DiscountCouponFilled size="16" />
              </div>
              <div className="flex items-center justify-between flex-1">
                <span className="typo-label text-neutral-800">
                  사용가능 쿠폰 <strong className="text-brand-700">2장</strong>
                </span>
                <button
                  className="flex items-center gap-1 typo-element6 text-neutral-600"
                  type="button"
                >
                  변경하기
                  <ArrowRight size="16" />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 border border-neutral-200 rounded-lg flex justify-between items-center">
            <span className="typo-body2-bold">현금영수증</span>
            <button
              className="flex items-center gap-1 typo-element6 text-neutral-600"
              type="button"
            >
              신청하기
              <ArrowRight size="16" />
            </button>
          </div>
          <div className="p-4 border border-neutral-200 rounded-lg flex justify-between items-center">
            <span className="typo-body2-bold">결제수단</span>
          </div>
          <div>
            <span className="inline-block mb-2.5 typo-element2 text-neutral-800">
              결제금액을 확인해주세요
            </span>
            <div className="p-4 border border-neutral-200 rounded-lg flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="typo-body3-medium text-neutral-800">총 금액</span>
                  <span className="typo-body2-medium text-neutral-800">25,500원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="typo-body3-medium text-neutral-600">찐단골 할인</span>
                  <span className="typo-body3-medium text-brand-700">-4,000원</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-2">
                    <span className="typo-body3-medium text-neutral-600">배달팁</span>
                    <Badge color="red" size="small">
                      자세히
                    </Badge>
                  </div>
                  <span className="typo-body3-medium text-neutral-600">무료</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="typo-element2 text-neutral-800">결제금액</span>
                <span className="typo-element2 text-neutral-800">21,500원</span>
              </div>
            </div>
          </div>
          <div className="p-4 border border-neutral-200 rounded-lg flex items-center gap-1">
            <div className="size-[28px] bg-brand-200 text-brand-700 flex items-center justify-center rounded-full">
              <DiscountCouponFilled size="16" />
            </div>
            <span className="flex-1 typo-body2-bold">스탬프 적립</span>
            <span className="typo-element3 text-brand-700">1개</span>
          </div>
        </div>
      </div>
      <BottomFixed>
        <Button className="w-full" size="small">
          결제하기
        </Button>
      </BottomFixed>
    </>
  );
};

export default OrderPage;
