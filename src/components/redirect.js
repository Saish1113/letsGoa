import { useHistory } from 'react-router-dom';

function handleSuccess(){
    const history = useHistory;
    alert("in success");
    history.push('/activity_view');
}

export default handleSuccess;