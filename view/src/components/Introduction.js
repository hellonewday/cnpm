import React, { useState } from "react";
import { Typography, TextField } from "@material-ui/core";
import Axios from "axios";
import Datalist from "./Datalist";

const Introduction = () => {
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      setData([]);
    } else {
      Axios.get(
        `https://cnpm-e17cn1.herokuapp.com/pieces?text=${event.target.value}`
      )
        .then((response) => setData(response.data.data))
        .catch((error) => console.log(error.response));
    }
  };

  return (
    <div>
      <Typography variant="h6" style={{ margin: 10 }}>
        Chào mừng các bạn đến tới trung tâm học tập môn{" "}
        <b>Nhập môn Công nghệ phần mềm</b> - INT1340
        <div style={{ margin: 10 }}>
          <TextField
            id="standard-basic"
            label="Tìm kiếm nhanh"
            variant="outlined"
            type="text"
            name="text"
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
        </div>
      </Typography>
      {data.length > 0 ? <Datalist data={data} /> : <hr />}
      <Typography variant="h5" style={{ margin: 10 }}>
        <b>Tài liệu học</b>
      </Typography>
      <Typography variant="h6" style={{ margin: 10 }}>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/0B6kidcV4CiTFLTI4UmozWlpBS3M/view?usp=sharing"
        >
          1. Giáo trình (những thông tin trong trang này đều liên quan tới giáo
          trình này)
        </a>
        <br />
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/1kwzhnBTQX_q6DGWf9dN5HQgYhNYKv6s1/view?usp=sharing"
        >
          2. Ngân hàng câu hỏi
        </a>
        <br />
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/1sY72yu2tdB7up4L9dtzLvItwoFGJ6z91/view?usp=sharing"
        >
          3. Đề Bài tập lớn
        </a>
      </Typography>
    </div>
  );
};

export default Introduction;
