"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", String(1));
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    400
  );

  return (
    <div className='bg-skin-dark-light'>
      <Input
        className='input outline-none bg-skin-dark border-skin-dark-light'
        width={70}
        type='text'
        placeholder='Search Title'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
