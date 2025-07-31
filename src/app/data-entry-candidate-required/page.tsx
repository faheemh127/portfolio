// In your app/page.tsx or wherever you want to render it

import JobPost from "@/components/ui/job-post";

export default function Page() {
  return (
    <div className="bg-slate-900 pt-[6rem] pb-[5rem] px-4">
      <JobPost />
    </div>
  );
}
