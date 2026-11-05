import remarkGfm from "remark-gfm";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import ReactMarkdown from "react-markdown";

export default function ProductDescription({ content }: { content: string }) {
  return (
    <Card className="p-2">
      <CardContent>
        <CardTitle className="text-xl font-bold">توضیحات</CardTitle>
        <CardDescription className="leading-8 py-4 text-neutral-900">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
