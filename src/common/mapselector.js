import { useRef, useEffect} from "react";
const MapSelector = (props) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const places = { lat: null, lng: null }
  const onChanges=()=>{
    props.onChanges(places);
  }
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      places.lat = place.geometry.location.lat();
      places.lng = place.geometry.location.lng();
      onChanges();
    });
  }, []);
  return (
    <div>
      <input ref={inputRef} onChange={() => {inputRef.current.focus()}} style={{width:'100%'}}/>
    </div>
  );
};
export default MapSelector;
