import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={cn("w-full max-w-300 mx-10 md:mx-6", className)}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
