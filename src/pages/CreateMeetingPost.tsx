import styled from "styled-components";
import { BasicPadding } from "../components/common/BasicPadding";
import { BasicButton } from "../components/common/BasicButton";
import { MenuLabel } from "../components/common/MenuLabel";
import { PostDetailInfoType } from "../types/postCardType";
import { LABELCOLOR } from "../constants/menu";
import { KakaoMap } from "../components/kakao/KakaoMap";
import { Comments } from "../components/createMeetingPost/Comments";
import { SmallGrayButton } from "../components/common/SmallGrayButton";

export const CreateMeetingPost = ({
    postDetailInfo,
}: {
    postDetailInfo: PostDetailInfoType;
}) => {
    const selectedFoods = LABELCOLOR.find((item) =>
        postDetailInfo.food.includes(item.menu)
    ) || { menu: "", color: "" };

    const geoCode = [postDetailInfo.latitude, postDetailInfo.longitude];

    return (
        <PostContainer>
            <BasicPadding>
                <div className="post-box">
                    <h2>{postDetailInfo.title}</h2>
                    <div className="user-menu-wrap">
                        <div className="user-info">
                            <div className="photo">
                                <img src={postDetailInfo.image} />
                            </div>
                            <div>
                                <div className="nickname">
                                    {postDetailInfo.nickname}
                                </div>
                                <div className="created-date">
                                    {postDetailInfo.createdDate}
                                </div>
                            </div>
                        </div>
                        <div>
                            <MenuLabel
                                $menuColor={selectedFoods.color}
                                $isSelected={true}
                            >
                                {selectedFoods.menu}
                            </MenuLabel>
                        </div>
                    </div>

                    <div
                        className="description"
                        dangerouslySetInnerHTML={{
                            __html: postDetailInfo.content,
                        }}
                    ></div>
                    <MeetingInfoGrid>
                        <div className="meeting-name">
                            <div className="sub-title">모임명</div>
                            <div>{postDetailInfo.name}</div>
                        </div>
                        <div className="where">
                            <div className="sub-title">어디서?</div>
                            <div>
                                <strong>{postDetailInfo.storeName}</strong>
                            </div>
                            <div>{postDetailInfo.storeAddress}</div>
                        </div>
                        <div className="when">
                            <div className="sub-title">언제?</div>
                            <div>{postDetailInfo.date}</div>
                        </div>
                    </MeetingInfoGrid>

                    <MapContainer>
                        <KakaoMap geoCode={geoCode} />
                    </MapContainer>

                    <div className="basic-buttons-wrap">
                        <BasicButton $fontSize="12px">모임 참여</BasicButton>
                        <BasicButton
                            $fontSize="12px"
                            $backgdColor="#c0c0c0"
                            $hoverBackgdColor="#b6b6b6"
                        >
                            대화 참여
                        </BasicButton>
                    </div>

                    <RightAlign>
                        <div className="personnel">
                            {postDetailInfo.current} / {postDetailInfo.maximum}
                            <span>명</span>
                        </div>

                        <div>
                            <SmallGrayButton>수정</SmallGrayButton>
                            <SmallGrayButton>삭제</SmallGrayButton>
                        </div>
                    </RightAlign>
                </div>
                <Comments />
            </BasicPadding>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    .post-box {
        margin: 50px auto;
        width: 50%;
        height: fit-content;
        border-radius: 12px;
        padding: 32px 24px;
        background-color: ${(props) => props.theme.color.LIGHT_GRAY};

        h2 {
            font-size: 20px;
        }
    }

    .photo {
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        cursor: pointer;

        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .user-menu-wrap {
        margin: 16px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .user-info {
            display: flex;
            align-items: center;
            gap: 6px;

            .nickname {
                font-weight: 600;
                font-size: 12px;
            }

            .created-date {
                color: #999999;
                font-size: 11px;
            }
        }
    }

    .description {
        background-color: #fff;
        border-radius: 12px;
        width: 100%;
        padding: 16px;
        margin: 24px 0;
        height: fit-content;
        min-height: 120px;
    }

    .basic-buttons-wrap {
        button {
            margin: 0 4px;
        }
    }
`;

const MeetingInfoGrid = styled.div`
    font-size: 14px;
    margin: 32px 0;
    display: grid;
    gap: 16px;
    grid-template-areas:
        "meeting-name when"
        "where where";

    .sub-title {
        font-weight: 600;
        color: #009a5f;

        & + div {
        }
    }

    .meeting-name {
        grid-area: meeting-name;
    }

    .where {
        grid-area: where;
    }

    .when {
        grid: when;
    }
`;

const MapContainer = styled.div`
    width: 100%;
    height: fit-content;
    margin: 32px 0;
    border-radius: 12px;
`;

const RightAlign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .personnel {
        font-size: 24px;
        font-weight: 600;

        span {
            font-size: 12px;
            margin-left: 4px;
        }
    }
`;
