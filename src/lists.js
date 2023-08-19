import React from "react";

class Lists extends React.Component {
    render() {
        const { items, deleteTaskHandler } = this.props;
        return (
            <div>

                <ol className=' text-left text-lg text-red-500 w-[50%] p-3 mt-5 container mx-auto'>
                    {this.props.items.map((task, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => { deleteTaskHandler(index) }}
                            >
                                {task}
                            </li>
                        )
                    })}

                </ol>
            </div>
        )
    }
}

export default Lists;