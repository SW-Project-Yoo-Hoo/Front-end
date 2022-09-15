import React, { useState, useCallback, useRef } from "react";
import styles from "./post.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { MdCancel, MdCheck } from "react-icons/md";

const Post = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    text: "",
  });

  const { title, text } = inputs;

  const changeHandling = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [stuffs, setStuffs] = useState({
    desk: false,
    chair: false,
  });

  const { desk, chair } = stuffs;

  const changeStuffHandling = (objects, id, value) => {
    const name = objects[id];
    setStuffs({
      ...stuffs,
      [name]: !value,
    });
  };

  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const imageAddHandling = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 8) {
      imageUrlLists = imageUrlLists.slice(0, 8);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const imageDeleteHandling = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className={styles.container}>
      {/* header */}
      <Header />
      <div className={styles.backGroundIamgeHeader} />

      {/* contents */}
      <div className={styles.postContainer}>
        {/* 게시물 제목 */}
        <div className={styles.title}>
          <span className={styles.titleText}>게시물 제목</span>
          <input
            type="text"
            name="title"
            maxlength="19"
            onChange={changeHandling}
            value={title}
            placeholder="게시물 제목을 입력해주세요(최대 20자)"
            className={styles.titleInput}
          />
        </div>

        {/* 이미지 */}
        <div className={styles.imageEnroll}>
          {/* 글자 */}
          <div className={styles.imageEnrollText}>
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>이미지</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>
            <span className={styles.textSub}>최대 5장 첨부 가능</span>
          </div>

          {/* 이미지 첨부 */}
          <div className={styles.imageEnrollPick}>
            {/* 이미지 미리보기 및 삭제 */}
            <div className={styles.imagePicked}>
              {showImages.map((image, id) => (
                <div className={styles.imagePickedBord} key={id}>
                  <div
                    className={styles.deleteButton}
                    onClick={() => imageDeleteHandling(id)}
                  >
                    <MdCancel className={styles.deleteButtonStyle} />
                  </div>
                  <img
                    className={styles.imagePickedStyle}
                    src={image}
                    alt={`${image}-${id}`}
                  />
                </div>
              ))}
            </div>

            {/* 이미지 첨부하기 */}
            <label className={styles.buttonStyle} onChange={imageAddHandling}>
              첨부하기
              <input
                type="file"
                id="imgFile"
                multiple
                accept="image/*"
                className={styles.imagePicker}
              />
            </label>
          </div>
        </div>

        {/* 대여 물품 선택 */}
        <div className={styles.stuff}>
          {/* 제목 */}
          <div className={styles.imageEnrollText}>
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>대여물품</span>
            </div>
            <span className={styles.textSub}>복수 선택 가능</span>
          </div>

          {/* 물품 선택 */}
          <div className={styles.stuffPick}>
            {/* 책상 */}
            <div
              className={styles.stuffChoice}
              onClick={() => {
                changeStuffHandling(Object.keys(stuffs), 0, desk);
              }}
            >
              {/* text */}
              <div
                className={[
                  styles.stuffName,
                  desk ? styles.colorHighlight1 : styles.colorUnselect,
                ].join(" ")}
              >
                책상
              </div>

              {/* check */}
              <div>
                <MdCheck
                  className={[
                    styles.stuffIcon,
                    desk ? styles.colorMainGreen : styles.colorIconLightGrey,
                  ].join(" ")}
                />
              </div>
            </div>

            {/* 의자 */}
            <div
              className={styles.stuffChoice}
              onClick={() => {
                changeStuffHandling(Object.keys(stuffs), 1, chair);
              }}
            >
              {/* text */}
              <div className={styles.stuffLineName}>
                <div className={styles.line}></div>
                <span
                  className={[
                    styles.stuffName,
                    chair ? styles.colorHighlight1 : styles.colorUnselect,
                  ].join(" ")}
                >
                  의자ㅇㅇㅇㅇㅇ
                </span>
              </div>

              {/* check */}
              <div>
                <MdCheck
                  className={[
                    styles.stuffIcon,
                    chair ? styles.colorMainGreen : styles.colorIconLightGrey,
                  ].join(" ")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 대여 단위, 가격 및 수량 */}
        <div className={styles.deal}>
          {/* 대여단위 */}
          <div className={styles.unit}>
            {/* 제목 */}
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>대여단위</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>

            {/* 선 */}
            <div className={styles.line}></div>

            {/* 보더 */}
            <div className={styles.unitPick}></div>
          </div>

          {/* 가격 및 수량 */}
          <div className={styles.priceQuantity}>
            {/* 제목 */}
            <div className={styles.textMain}>
              <span className={styles.colorHighlight1}>가격 및 수량</span>
              <span className={styles.colorMainGreen}> *</span>
            </div>

            {/* 선 */}
            <div className={styles.line}></div>

            {/* 보더 */}
            <div className={styles.priceQuantityPick}>
              <div className={styles.price}></div>
              <div className={styles.quantity}></div>
            </div>
          </div>
        </div>

        {/* 상세 내용 */}
        <div className={styles.detailText}>
          <div className={styles.textMain}>
            <span className={styles.colorHighlight1}>상세내용</span>
            <span className={styles.colorMainGreen}> *</span>
          </div>
          <div className={styles.detailTextFild}></div>
        </div>

        {/* 등록하기 버튼 */}
        <div className={styles.enrollButton}>
          <div className={styles.buttonStyle}>등록하기</div>
        </div>
      </div>

      {/* foot */}
      <div className={styles.bottomContainer}>
        <div className={styles.backGroundIamgeFoot} />
        <Footer />
      </div>
    </div>
  );
};

export default Post;
