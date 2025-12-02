import React, { useState } from 'react';

// 假設這就是你要複製的特定文字
const textToCopy = "ws921208s@gmail.com";

const CopyToClipboardButton: React.FC = () => {
  // 用於顯示複製成功的訊息
  const [isCopied, setIsCopied] = useState(false);

  // 處理點擊事件的函數
  const handleCopyClick = async () => {
    try {
      // 使用 Clipboard API 進行複製
      await navigator.clipboard.writeText(textToCopy);
      
      // 設置狀態為已複製，並在短時間後恢復
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // 2 秒後訊息消失

    } catch (err) {
      console.error('複製失敗: ', err);
      alert('複製失敗');
    }
  };

  return (
    <div>
      <p>要複製的內容: <strong>{textToCopy}</strong></p>
      
      <button onClick={handleCopyClick}>
        {isCopied ? '已成功複製！' : '點擊複製文字'}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;