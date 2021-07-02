
function Item() {
    return (
        <>
            <div className="item">
                <input type="checkbox" id='1' />
                <label for='1'>Item 1</label>
                <button className='delete'>Delete</button>
            </div>
            <div className="item">
                <input type="checkbox" id='2' />
                <label for='2'>Item 2</label>
                <button className='delete'>Delete</button>
            </div>
            <div className="item">
                <input type="checkbox" id='3' />
                <label for='3'>Item 3</label>
                <button className='delete'>Delete</button>
            </div>
        </>
    );
}

export { Item };
