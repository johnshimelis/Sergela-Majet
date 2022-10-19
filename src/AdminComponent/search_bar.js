import { Row,Col,Input,Select,DatePicker} from 'antd';
const SearchBar=()=>{
    const { RangePicker } = DatePicker;
    const {Option}=Select;
    return(
            <div style={{width:'95%',marginTop:'2%',marginLeft:'4%'}}>
            <Row gutter={[8, 16]}>
                    <Col span={6}>
                        <label>Status</label>
                            <Select defaultValue="successfull" style={{display:'block'}}>
                                <Option value="pending">Pending</Option>
                                <Option value="successfull">Successfull</Option>
                                <Option value="cancel">Cancel</Option>
                                <Option value="overdue">Overdue</Option>
                            </Select>
                        </Col>   
                    <Col span={4} >
                        <label>Driver</label>
                        <Input placeholder='Search Drivers'/>
                        </Col>
                    <Col span={4} >
                        <label>Customer Name</label>
                        <Input placeholder='Search User'/>
                        </Col>
                    <Col span={6}>
                        <label>Filter by Date</label>
                        <RangePicker/>
                    </Col>
            </Row>
        </div>
    
    );
}

export default SearchBar;