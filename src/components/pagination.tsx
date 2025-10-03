'use client';
import { usePathname, useRouter } from 'next/navigation';

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from './ui/pagination';

function PaginationComp({ page }: { page: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleTurnPage = (page: number) => {
    router.push(`${pathname}?page=${page}`, {
      scroll: false
    });
  };
  return (
    <Pagination>
      <PaginationContent>
          {
            Array(page).fill('').map((_, idx) => (
              <PaginationItem
                key={idx}
                className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-md text-white hover:shadow-md cursor-pointer"
              >
                <PaginationLink
                  className="hover:bg-emerald-500 hover:text-white"
                  onClick={() => handleTurnPage(idx + 1)}
                >{idx + 1}</PaginationLink>
                
              </PaginationItem>
            ))
          }
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComp;
