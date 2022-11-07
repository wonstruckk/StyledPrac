import styled, { keyframes } from "styled-components";

/* as로 a태그로변경, 물론 다른태그들로도 변경 가능함. div-> something */
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">🫡</Emoji>
        <Title></Title>
      </Box>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50px;
  }
  100%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  /* animaiton추가. */
  animation: ${rotationAnimation} 3s linear infinite;
  /* styledcomponent안에 target해서 일반 css사용. */
  /* &=span과 같다, 단축키개념. */
  /* & */
  ${Emoji}:hover {
    font-size: 150px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// <Father as="header">
// <Input />
// <Input />
// <Input />
// <Input />
// </Father>

// const Father = styled.div`
//   display: flex;
// `;

//required속성 추가함 한꺼번에.
// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

// const Box = styled.div`
//   /* props사용으로 bgcolor바꿈 */
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

//Box의 속성을 모두 가져오고 border-radius추가로 설정.
//extending이기 때문에 위치가 아래있어야함, 부-모?
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// const Text = styled.span`
//   color: white;
// `;
