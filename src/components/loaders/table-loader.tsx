import {Skeleton} from "@/components/ui/skeleton";

export const TableLoader = () => {
  return (
    <div className={"w-full h-full flex flex-col gap-y-2"}>
      <div className={"w-full h-6 flex justify-between items-center gap-x-4"}>
        <Skeleton className={"h-4 w-1/4"}/>
        <Skeleton className={"h-4 w-1/4"}/>
        <Skeleton className={"h-4 w-1/4"}/>
        <Skeleton className={"h-4 w-1/4"}/>
      </div>
      <div className={"w-full h-6 flex justify-between items-center gap-x-4"}>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
      </div>
      <div className={"w-full h-6 flex justify-between items-center gap-x-4"}>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
      </div>
      <div className={"w-full h-6 flex justify-between items-center gap-x-4"}>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
          <Skeleton className={"h-4 w-1/4"}/>
      </div>
    </div>
  )
}