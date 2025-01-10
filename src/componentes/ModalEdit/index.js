import Form from '../Form'
import { styled } from 'styled-components'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`
const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
`

const DialogCustom = styled.dialog`
    position: fixed;
    background: black;
    border-radius: 15px;
    height: 500px;
    padding: 0;
    border: 0;
    width: 715px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .form {
        button {
            position: relative;
            top: -200px;
            right: -20px;
        }
    }
    z-index: 11;
`

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

function ModalEdit({ video, onClose }) {
  return (
    <>
      {video && <>
        <Overlay />
        <Container>
          <DialogCustom open={!!video} onSubmit={onClose}>
            <Form video={video} />
            <form method='dialog' className='form'>
              <BotaoIcone formMethod='dialog'>
                <img src='./images/close.png' alt='close' />
              </BotaoIcone>
            </form>
          </DialogCustom>
        </Container>
      </>}
    </>
  )
}

export default ModalEdit