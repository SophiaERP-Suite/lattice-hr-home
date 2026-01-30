import DOMPurify from 'dompurify';
 
interface HtmlRendererProps {
  html: string;
}
 
export default function HtmlRenderer({ html }: HtmlRendererProps) {
  return (
    <div
      className='details text-wrap'
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
}
