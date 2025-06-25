import React, { useState, useMemo, useRef, useEffect, useCallback, useLayoutEffect, useTransition, useDeferredValue, useImperativeHandle, forwardRef, useDebugValue, useId } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);


// useImperativeHandle        child Component
// Step 1: Wrap child with forwardRef
const InputField = forwardRef((props, ref) => {
    const inputRef1 = useRef();

    // Step 2: Expose only `focus` method to parent
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef1.current.focus();
        }
    }));

    return <input ref={inputRef1} type="text" placeholder="Enter text" />;
});

function Hooks_Practice() {

    const [count, setCount] = useState(0); // Initial count is 0
    const [number, setNumber] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    const factorial = useMemo(() => {
        console.log('Calculating factorial...');
        const calcFactorial = (n) => {
            return n <= 0 ? 1 : n * calcFactorial(n - 1);
        };
        return calcFactorial(number);
    }, [number]);

    const themeStyles = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px',
        marginTop: '20px',
    };



    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const previousName = useRef(null);
    useEffect(() => {
        previousName.current = name
    }, [name])

    const handleClick = () => {
        inputRef.current.focus(); // Focus the input field
        inputRef.current.value = 'ab bhai';
    };



    // useCallback

    const [count2, setCount2] = useState(0);

    const handleClick2 = useCallback(() => {
        console.log('Button clicked');
    }, []); // Function will not be recreated unless dependencies change



    function Child({ onClick }) {
        console.log('Child rendered');
        return <button onClick={onClick}>Click me</button>;
    }

    const MemoizedChild = React.memo(Child); // Prevent re-render if props don't change


    //useLayoutEffect
    const [count3, setCount3] = useState(0);
    const boxRef = useRef();
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        console.log(count3)
    }, [count3])

    useLayoutEffect(() => {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setSize({ width, height });
    }, []); // Run once after mount



    // useTransition
    const [input, setInput] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Defer heavy filtering to keep typing smooth
        startTransition(() => {
            const filtered = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };



    // useDeferredValue
    const [input1, setInput1] = useState('');
    const deferredInput = useDeferredValue(input1); // Delays heavy filtering

    const filteredItems1 = bigList.filter(item =>
        item.toLowerCase().includes(deferredInput.toLowerCase())
    );


    //useImperativeHandle           also see above child component
    const inputRef1 = useRef();


    // useId
    const id = useId(); // Generate a unique and stable ID

    return (
        <div className='text-center'>

            <div>
                <div className='text-blue-600 mb-5'>useState</div>
                <h2>Count: {count}</h2>
                <button className='bg-blue-400 text-white px-4 mx-3' onClick={() => setCount(count + 1)}>
                    Increase
                </button>
                <button className='bg-blue-400 text-white px-4 mx-3' onClick={() => setCount(count - 1)}>
                    Decrease
                </button>
                <button className='bg-blue-400 text-white px-4 mx-3' onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>




            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useMemo</div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <button onClick={() => setDarkMode(!darkMode)}>
                    Toggle Theme
                </button>
                <div style={themeStyles}>
                    Factorial of {number} is {factorial}
                </div>
            </div>



            <div>
                <div className='text-blue-600 mb-5'>useRef</div>

                <div>
                    <input ref={inputRef} onChange={e => setName(e.target.value)} type="text" placeholder="Click the button to focus me" />
                    <button onClick={handleClick} className='bg-blue-400 text-white px-4 mx-3'>Focus Input</button>
                    <div>Name is='{name}' and value of previousName is='{previousName.current}'</div>
                </div>
            </div>


            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useCallback</div>
                <div>
                    <p>Count: {count2}</p>
                    <button onClick={() => setCount2(count2 + 1)} className='bg-blue-400 text-white px-4 mx-3'>Increase Count</button>
                    <MemoizedChild onClick={handleClick2} />
                </div>
            </div>


            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useLayoutEffect</div>
                <div>
                    <div
                        ref={boxRef}
                        style={{ width: '300px', height: '150px', backgroundColor: 'lightblue', marginBottom: '10px' }}
                    >
                        Box
                    </div>
                    <p>Width: {size.width}px, Height: {size.height}px</p>
                </div>

                <div>
                    <button onClick={() => setCount3(c => c + 1)} className='bg-blue-400 text-white px-4 mx-3'>Increment</button>
                    <div>Count={count3}</div>
                </div>
            </div>


            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useTransition</div>
                <div>
                    <input value={input} onChange={handleChange} placeholder="Search items..." />
                    {isPending && <p>Loading...</p>}
                    <ul>
                        {filteredItems.slice(0, 100).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>



            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useDeferredValue</div>
                <div>
                    <input
                        type="text"
                        placeholder="Type to search..."
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    {input1 !== deferredInput && <p>Loading results...</p>}

                    <ul>
                        {filteredItems1.slice(0, 100).map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useImperativeHandle</div>
                <div>
                    <InputField ref={inputRef1} />
                    <button onClick={() => inputRef1.current.focus()}>
                        Focus the input
                    </button>
                </div>
            </div>


            <div className='my-10'>
                <div className='text-blue-600 mb-5'>useId</div>
                <div>
                    <label htmlFor={id}>Name:</label>
                    <input id={id} type="text" />
                </div>
            </div>
        </div>
    );
}

export default Hooks_Practice
