import { NextPage } from "next"
import { Container, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup } from '@chakra-ui/react';


const Login: NextPage = () => {
  return (
    <Container marginTop={10}>
      <Heading textAlign={"center"}>Iniciar sesion</Heading>
    <Card padding={3} alignItems={"center"}>
    <form>
    <FormControl marginBottom={5}>
    <FormLabel>Email</FormLabel>
    <Input type='text'placeholder="ingresa tu email" />
    </FormControl>
    <FormControl>
    <FormLabel >Codigo</FormLabel>
    <Input type='text'placeholder="ingresa tu codigo" />
    </FormControl>
    <ButtonGroup marginTop={10}>
        <Button>Iniciar sesion</Button> <Button>Ingresa tu codigo</Button>
    </ButtonGroup>
    </form>  

    </Card>
  
    </Container>
    )
}

export default Login