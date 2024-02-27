"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface count {
  count: number;
}
const Pagination = ({ count }: count) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  params.set("page", String(1));
  const page = searchParams.get("page") || 1;
  const itemPerPage = 2;
  const lastPage = itemPerPage * (Number(page) - 1) + itemPerPage < count!;
  const firstpage = itemPerPage * (Number(page) - 1) > 0;
  const handleChangePage = (type: string) => {
    const nextPage = type === "prev" ? Number(page) - 1 : Number(page) + 1;
    params.set("page", nextPage.toString());
    router.replace(`${pathname}?${params}`);
  };

  return (
    <div>
      {count > 2 ? (
        <div className='w-full mx-auto max-w-[700px] flex justify-between'>
          <Button
            onClick={() => handleChangePage("prev")}
            disabled={!firstpage}
            variant={"secondary"}
          >
            Prev
          </Button>
          <Button
            onClick={() => handleChangePage("next")}
            disabled={!lastPage}
            variant={"secondary"}
          >
            Next
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
