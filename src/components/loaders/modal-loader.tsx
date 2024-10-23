import {Skeleton} from "@/components/ui/skeleton";

export const ModalLoader = () => {
  return (
    <div className={"flex flex-col gap-y-4 p-4"}>
      <Skeleton className={"h-8 w-1/3"}/>
      <div className={"flex flex-col gap-y-2"}>
        <Skeleton className={"w-full h-6"}/>
        <Skeleton className={"w-full h-6"}/>
        <Skeleton className={"w-full h-6"}/>
      </div>
    </div>
  )
}