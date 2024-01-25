import {Container, Content, Row} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import {useState} from 'react';

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [fristNumber, setFristNumber] = useState('0');
    const [operation, setOperation] = useState('')

    const handleOnCLear = () => {
        setCurrentNumber('0');
        setFristNumber('0')
        setOperation('')
    }
    const handleAddNumber = (n) => {
        setCurrentNumber(prevState => `${prevState === '0' ? '' : prevState}${n}`)
    }

    const handleSumNumbers = () => {
        if (fristNumber === '0') {
            setFristNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const sum = Number(fristNumber) + Number(currentNumber)
            setCurrentNumber(String(sum.toFixed(2)))
            setOperation('')
        }
    }
    const handleMinusNumbers = () => {
        if (fristNumber === '0') {
            setFristNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const minus = Number(fristNumber) - Number(currentNumber)
            setCurrentNumber(String(minus.toFixed(2)))
            setOperation('')
        }
    }

    const handlerMultiNumbers =() =>{
        if(fristNumber === '0'){
            setFristNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('*')
        }else{
            const multi = Number(fristNumber) * Number(currentNumber)
            setCurrentNumber(String(multi.toFixed(2)))
            setOperation('*')
        }
    }

    const handlerDivNumbers = () =>{
        if(fristNumber === '0'){
            setFristNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('/')
        }else{
            const div = Number(fristNumber) / Number(currentNumber)
            setCurrentNumber(String(div.toFixed(2)))
            setOperation('/')
        }
    }

    const handleEquals = () => {
        if (fristNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSumNumbers()
                    break
                case '-':
                    handleMinusNumbers()
                    break
                case '*':
                    handlerMultiNumbers()
                    break
                case '/':
                    handlerDivNumbers()
                    break
                default :
                    break
            }
        }
    }

    return (
        <Container>
            <Content>
                <Input value={currentNumber}/>
                <Row>
                    <Button label='x' onClick={handlerMultiNumbers}/>
                    <Button label='/' onClick={handlerDivNumbers}/>
                    <Button label='c' onClick={handleOnCLear}/>
                    <Button label='.' onClick={() => handleAddNumber('.')}/>
                </Row>
                <Row>
                    <Button label='7' onClick={() => handleAddNumber('7')}/>
                    <Button label='8' onClick={() => handleAddNumber('8')}/>
                    <Button label='9' onClick={() => handleAddNumber('9')}/>
                    <Button label='-' onClick={handleMinusNumbers}/>
                </Row>
                <Row>
                    <Button label='4' onClick={() => handleAddNumber('4')}/>
                    <Button label='5' onClick={() => handleAddNumber('5')}/>
                    <Button label='6' onClick={() => handleAddNumber('6')}/>
                    <Button label='+' onClick={handleSumNumbers}/>
                </Row>
                <Row>
                    <Button label='1' onClick={() => handleAddNumber('1')}/>
                    <Button label='2' onClick={() => handleAddNumber('2')}/>
                    <Button label='3' onClick={() => handleAddNumber('3')}/>
                    <Button label='=' onClick={handleEquals}/>
                </Row>

            </Content>
        </Container>
    )
}

export default App;
