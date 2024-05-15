const { Template } = VM.require("devs.near/widget/Template") || {
  Template: () => <></>,
}; // this is a helper module for layouts (docs incoming, don't feel like you need to use it)
// (but if you do use it, think about no code ;) ) 

const variants = ["standard", "split", "sidebar"];
const [selectedLayout, setSelectedLayout] = useState("split");

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
  justify-content: "space-between";
  align-items: "center";
  height: "100%";
`;
const Block = styled.div`
  flex: 1;
  border: "1px solid #ccc";
  background-color: "#f0f0f0";
  padding: "10px";
  text-align: "center";
  display: "flex";
  flex-direction: "column";
  justify-content: "space-between";
  align-items: "center";
  height: "100%";
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  width: 100%;

  background-color: #0b0c14;
`;

return (
  <>
    <div style={{ height: "100vh", width: "100%" }}>
      <Template
        layout={{
          src: "devs.near/widget/Layout",
          initialProps: {
            variant: "split",
          },
        }}
        blocks={{
          Header: () => (
            <Header>
              <img
                style={{ width: 85, objectFit: "cover" }}
                src="https://storage.googleapis.com/media.urbit.org/logo/White/~-logo-white-medium.png"
              />
            </Header>
          ),
          Footer: () => (
            <Block style={{ backgroundColor: "#F4CCCC", maxHeight: 85 }}>
              Footer
            </Block>
          ),
          Left: () => (
            <Block
              style={{
                backgroundColor: "#B6D7A8",
                display: "flex",
                flex: "1",
                height: "80vh",
                width: "100%",
              }}
            >
              <Canvas persistance="urbit" />
            </Block>
          ),
          Right: () => (
            <Block style={{ backgroundColor: "#FFE599" }}>
              <Widget src="${config_account}/widget/components.UrbitWidget" />
            </Block>
          ),
        }}
      />
    </div>
  </>
);
