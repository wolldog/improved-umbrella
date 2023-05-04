import React from "react";
import { Badge, Image, Space, Menu, Button } from "antd";
import headerImage from "./../../assets/images/headerImage.png";
import { BellFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import Auth from "../../utils/auth.js";

const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="PageHeader">
      <Image src={headerImage} style={{ maxHeight: "75px" }}></Image>

      <Space>
        {Auth.loggedIn() ? (
          <div >
            <Button onClick={() => navigate("/logout") } style={{ margin: "10px"}}>Logout</Button>
            <Badge className="notification" count={5}  >
              <BellFilled style={{ fontSize: 20}} />
            </Badge>
          </div>
        ) : (
          <Menu
            onClick={(item) => {
              navigate(item.key);
            }}
            mode="horizontal"
            items={[
              {
                label: "Login",
                key: "/login",
              },
              {
                label: "Join",
                key: "/join",
              },
            ]}
          ></Menu>
        )}
      </Space>
    </div>
  );
};

export default PageHeader;
