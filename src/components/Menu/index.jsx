import {
  Container,
  Up,
  Down,
  Img,
  Text,
  LogoContainer,
  TwitLogo,
  Btn,
  ProfileImg,
  IdAccount,
  Id,
  Account,
  EtcImg,
} from "./style";
import {
  ProfileImage,
  Home,
  Search,
  Alarm,
  Message,
  Bookmark,
  List,
  SubProfile,
  SubEtc,
  Etc,
  Twit,
} from "assets/image";

function Menu() {
  return (
    <>
      <Container>
        <Up>
          <TwitLogo src={Twit} alt="twitter logo" />
          <LogoContainer>
            <Img src={Home} alt="home logo" />
            <Text>홈</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Search} alt="search logo" />
            <Text>탐색하기</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Alarm} alt="alarm logo" />
            <Text>알림</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Message} alt="message logo" />
            <Text>쪽지</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Bookmark} alt="bookmark logo" />
            <Text>북마크</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={List} alt="list logo" />
            <Text>리스트</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={SubProfile} alt="profile logo" />
            <Text>프로필</Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={SubEtc} alt="etc logo" />
            <Text>더보기</Text>
          </LogoContainer>
          <Btn type="button" height="50px" width="200px" margin="10px">
            트윗하기
          </Btn>
        </Up>
        <Down>
          <ProfileImg src={ProfileImage} alt="profile" />
          <IdAccount>
            <Id>이화연</Id>
            <Account>@ewha_EFUB4</Account>
          </IdAccount>
          <EtcImg src={Etc} alt="etc" />
        </Down>
      </Container>
    </>
  );
}

export default Menu;
