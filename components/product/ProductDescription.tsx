export default function ProductDescription({ content }: { content: string }) {
  return (
    <div className="bg-white rounded-xl py-2 px-6">
      <h2 className="text-xl font-bold">توضیحات</h2>
      <p className="leading-8 py-4">{content}</p>
    </div>
  );
}
