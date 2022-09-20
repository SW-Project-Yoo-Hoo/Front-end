import React from "react";
import styles from "./sentStatus.module.css";

const SentStatus = (props) => {
  const postInfo = {
    ok: false,
    img: "",
    title: "",
    unit: "",
    price: "",
  };

  const getPostInfo = () => {
    //백엔드에서 정보 가져오기
    // postInfo.ok = true;
    return postInfo.ok;
  };

  return (
    <div className={styles.container}>
      {/* 게시물이 없을때 */}
      <div className={getPostInfo() ? styles.displayNone : styles.noPost}>
        <span>대기 중인 요청이 없습니다</span>
      </div>

      {/* 게시물이 있을때 */}
    </div>
  );
};

export default SentStatus;