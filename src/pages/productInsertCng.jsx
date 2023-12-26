import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AWS from 'aws-sdk';
import axios from "axios";

const YourEditorComponent = () => {
    const [content, setContent] = useState('');
    const [titleImage, setTitmeImage] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageFile2, setImageFile2] = useState(null);
    const [imageFile3, setImageFile3] = useState(null);
    const [imageFile4, setImageFile4] = useState(null);
    const [imageFile5, setImageFile5] = useState(null);
    const [imageFile6, setImageFile6] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        hashtag: '',
        length: '',
        width: '',
        depth: '',
        description: '',
        steelPlate: '',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    
  const base64String = 'QUtJQVRWU1FDV0U3VTQ2UVJYNzY=';
  const base64String2 = 'QThKR01zdUdqUzg2MWd6ZThEejAyYzFkOGlhTndLN28xUUg5S3N0RA==';

  const id = atob(base64String);
  const pass = atob(base64String2);

  const handleImageUpload = async (file) => {
    let formData = new FormData();
    formData.append('file', file);  // 파일을 FormData에 추가
    // AWS S3 설정
    const s3 = new AWS.S3({
      accessKeyId: id,
      secretAccessKey: pass,
      region: 'ap-southeast-2',  // 여기에 본인의 AWS 리전을 지정해주세요.
    });

    // S3에 이미지 업로드
    const params = {
      Bucket: 'cngtech',  // 여기에 본인의 S3 버킷 이름을 지정해주세요.
      Key: `images/${Date.now()}_${Math.floor(Math.random() * 1000)}.png`,
      Body: formData.get('file'),  // Blob 표현을 얻어옴
      ACL: 'public-read',
        ContentType: file.type,
        ContentDisposition: 'inline',  // 이 부분을 추가합니다.
    };

    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location;
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // 이미지 파일로 업로드
    setImageFile(file);
  };
    
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];

    // 이미지를 Base64로 인코딩
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile2(e.target.result.split(',')[1]);  // 인코딩된 데이터에서 ',' 뒷부분만을 가져옴
    };
    reader.readAsDataURL(file);
  };
    
  const handleImageChange3 = (event) => {
    const file = event.target.files[0];

    // 이미지를 Base64로 인코딩
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile3(e.target.result.split(',')[1]);  // 인코딩된 데이터에서 ',' 뒷부분만을 가져옴
    };
    reader.readAsDataURL(file);
  };
    
  const handleImageChange4 = (event) => {
    const file = event.target.files[0];

    // 이미지를 Base64로 인코딩
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile4(e.target.result.split(',')[1]);  // 인코딩된 데이터에서 ',' 뒷부분만을 가져옴
    };
    reader.readAsDataURL(file);
  };
    
  const handleImageChange5 = (event) => {
    const file = event.target.files[0];

    // 이미지를 Base64로 인코딩
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile5(e.target.result.split(',')[1]);  // 인코딩된 데이터에서 ',' 뒷부분만을 가져옴
    };
    reader.readAsDataURL(file);
  };
    
  const handleImageChange6 = (event) => {
    const file = event.target.files[0];

    // 이미지를 Base64로 인코딩
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageFile6(e.target.result.split(',')[1]);  // 인코딩된 데이터에서 ',' 뒷부분만을 가져옴
    };
    reader.readAsDataURL(file);
  };

  const handlePublish = async () => {
    // 이미지 업로드
    const imageUrl = imageFile ? await handleImageUpload(imageFile) : null;
    const imageUrl2 = imageFile2 ? await handleImageUpload(imageFile2) : null;
    const imageUrl3 = imageFile3 ? await handleImageUpload(imageFile3) : null;
    const imageUrl4 = imageFile4 ? await handleImageUpload(imageFile4) : null;
    const imageUrl5 = imageFile5 ? await handleImageUpload(imageFile5) : null;
    const imageUrl6 = imageFile6 ? await handleImageUpload(imageFile6) : null;

      const imageList = [
        imageUrl2,
        imageUrl3,
        imageUrl4,
        imageUrl5,
        imageUrl6
      ].filter((file) => file !== null);
      
      await setImageList(imageList);
      await setTitmeImage(imageUrl);
    // 여기에서 서버에 글 등록 요청을 보내고, content와 imageUrl를 전달합니다.
    // 서버에서는 해당 데이터를 DB에 저장하거나 다른 처리를 수행할 수 있습니다.
    console.log('Content:', content);
    console.log('Image URL:', imageUrl);
    console.log('Image List: ', imageList);

    await fetchData(imageUrl, imageList);
  };
    
  const fetchData = async (imageUrl, imageList) => {
    try {

        console.log(imageList);
        const data = {
            name: formData.name,
            category: formData.category,
            hashtag: formData.hashtag,
            titleImage: imageUrl,
            length: formData.length,
            width: formData.width,
            depth: formData.depth,
            description: formData.description,
            contents:content,
            steelPlate:formData.steelPlate,
            imageList: imageList
        }
        console.log(data)
    // const response = await axios.post(`https://worldwide-gabriellia-cngtech.koyeb.app/productInsert`);
        const response = await axios.post(`http://localhost:3001/productInsert`, data);
        
    alert('제품 등록 완료');
    console.log(response);
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('제품 등록 중 오류 발생');
  }
};

  return (
    <div>
          대표 사진 <input type="file" onChange={handleImageChange} /> <br />
          1번째 사진 <input type="file" onChange={handleImageChange2} /> <br />
          2번째 사진 <input type="file" onChange={handleImageChange3} /> <br />
          3번째 사진 <input type="file" onChange={handleImageChange4} /> <br />
          4번째 사진 <input type="file" onChange={handleImageChange5} /> <br />
          5번째 사진 <input type="file" onChange={handleImageChange6} /> <br />
          <hr />
          <br />
          <p><strong>글 등록</strong></p>
          <br />
          <div>
            <label htmlFor="name">제품명 : </label>
            <input
              type="text"
              id="name"
                  name="name"
                  placeholder='제품명'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="category">카테고리 (1:암롤박스 2:고철박스/스트랩박스/방통 3:중고박스 4:박스수리 ) : </label>
            <input
              type="text"
              id="category"
                  name="category"
                  placeholder='category'
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="hashtag">해시태그 : </label>
            <input
              type="text"
              id="hashtag"
                  name="hashtag"
                  placeholder='hashtag'
              value={formData.hashtag}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="length">Length : </label>
            <input
              type="text"
              id="length"
                  name="length"
                  placeholder='length'
              value={formData.length}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="width">Width : </label>
            <input
              type="text"
              id="width"
                  name="width"
                  placeholder='width'
              value={formData.width}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="depth">Depth : </label>
            <input
              type="text"
              id="depth"
                  name="depth"
                  placeholder='depth'
              value={formData.depth}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">간단한 설명 : </label>
            <textarea
              id="description"
                  name="description"
                  placeholder='입력해주세요.'
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="steelPlate">철판 두께 : </label>
            <input
              type="text"
              id="steelPlate"
                  name="steelPlate"
                  placeholder='입력해주세요.'
              value={formData.steelPlate}
              onChange={handleInputChange}
            />
          </div>
        
          
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{ toolbar: [['bold', 'italic', 'underline', 'strike'], ['list', 'bullet'], ['link', 'image'], ['clean']] }}
        formats={['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image']}
      />
      <button onClick={async() => {
        await handlePublish()
        // await fetchData();
      }
      }>글 등록</button>
    </div>
  );
};

export default YourEditorComponent;
