import React, { useState } from "react";
import Markdown from "react-markdown";
import "github-markdown-css";
// github风格的markdown格式
import "./MarkdownPreview.css";
// 代码块中的语法高亮
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // 主题，可换 monokai.css 等

function MarkdownPreview() {
  const [content, setContent] = useState("# 开始");
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="markdown-preview">
      <div className="header">
        <span>md格式实时预览</span>
      </div>
      <div className="body">
        <div className="input">
          <textarea rows={5} onChange={onContentChange}>
            {content}
          </textarea>
          {/* <input type="text" value={content} onChange={onContentChange} /> */}
        </div>
        <div className="preview markdown-body">
          <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
        </div>
      </div>
      <div className="footer">祝你每天愉快</div>
    </div>
  );
}

export default MarkdownPreview;
