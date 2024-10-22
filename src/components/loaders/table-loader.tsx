import {Skeleton} from "@/components/ui/skeleton";

export const TableLoader = () => {
  return (
    <div className={"w-full h-full flex flex-col gap-y-4"}>
      <div className={"w-full h-12 flex justify-between items-center gap-x-4"}>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
      </div>
      <div className={"w-full h-12 flex justify-between items-center gap-x-4"}>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
      </div>
      <div className={"w-full h-12 flex justify-between items-center gap-x-4"}>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
      </div>
      <div className={"w-full h-12 flex justify-between items-center gap-x-4"}>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
        <Skeleton className={"h-8 w-1/4"}/>
      </div>
    </div>
  )
}