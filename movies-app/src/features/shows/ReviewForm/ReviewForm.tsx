import { Flex, Button, Heading, Textarea, Box, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper} from '@chakra-ui/react'

export const ReviewForm = () => {
    return (
        <Box>
            <Heading size='md' textTransform='uppercase'>
            Add a review
            </Heading>
            <Textarea placeholder='Your review text here...'  />
            <Text pt='2' fontSize='sm'>
                Enter rating:
            </Text>
            <NumberInput step={0.5} defaultValue={5} min={0} max={5}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button marginTop="2" colorScheme='blue'>Submit review</Button>
        </Box>
    )
}