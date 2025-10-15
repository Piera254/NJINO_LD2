import API from "../api";

const AOIForm = ({ onAOICreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    latitude: "",
    longitude: "",
    size_km2: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/aoi", null, {
        params: formData,
      });
      alert("AOI created successfully!");
      onAOICreated(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to create AOI");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="aoi-form">
      <h2>Create AOI</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="latitude" placeholder="Latitude" onChange={handleChange} required />
      <input name="longitude" placeholder="Longitude" onChange={handleChange} required />
      <input name="size_km2" placeholder="Size (km²)" onChange={handleChange} required />
      <button type="submit">Save AOI</button>
    </form>
  );
};

export default AOIForm;
