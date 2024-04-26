import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Calendar
} from "lucide-react";
import Link from "next/link";

const Data = () => {
  
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="mb-6 text-3xl font-bold font-sans">Open a Model</h1>
      <Command className="rounded-lg h-fit border shadow-md w-[40%]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>Sorry We cannot find your search!</CommandEmpty>
          <CommandGroup heading="All">
            <Link href="/units">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Units</span>
              </CommandItem>
            </Link>
            <Link href="/questions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Questions</span>
              </CommandItem>
            </Link>
            <Link href="/mainQuestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>MainQuestions</span>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Data;
