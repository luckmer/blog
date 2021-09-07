class ImgApi {
  url = "https://api.cloudinary.com/v1_1/luckmer/image/upload";

  types = ["image/jpg", "image/png", "image/jpeg"];

  checkImg = (file: File) => {
    let err = "";
    if (!file) return (err = "File does not exist.");

    if (this.types.every((type) => file.type !== type))
      err = "is not a supported format";

    if (file.size > 150000) err = "is too large, please pick a smaller file";

    return err;
  };

  Upload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "razlnpyu");

    const res = await fetch(this.url, { method: "POST", body: formData });

    const data = await res.json();

    return { id: data.public_id, url: data.secure_url };
  };
}

const ApiImg = new ImgApi();

export default ApiImg;
