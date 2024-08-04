import React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
});

const TubeContainer = styled('div')({
    width: '100%', // Adjust width as needed
    height: '40px', // Adjust height as needed
    borderRadius: '40px', // Adjust border radius to make it look like a tube
    border: '1px solid black',
    position: 'relative',
    overflow: 'hidden',
});


const DottedLine = styled('div')({
    width: '80%', // Adjust width of the dotted line
    height: '2px', // Adjust height of the dotted line
    position: 'absolute',
    top: '50%', // Position the line in the center vertically
    left: '7%', // Move the line to center horizontally
    borderTop: '2px dotted #000', // Adjust color and style of the dotted line
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const Plane = styled('div')({
    width: '40px', // Adjust size of the maple leaf
    height: '38px', // Adjust size of the maple leaf // URL of the maple leaf image
    backgroundSize: 'cover',
    position: 'absolute',
    transform: 'translateY(-5%)',
    backgroundImage: 'url(/airwise/plane.svg)',
});

const Position = styled('div')({
    width: '20px', // Adjust size of the maple leaf
    height: '30px', // Adjust size of the maple leaf // URL of the maple leaf image
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundImage: 'url(/airwise/position.svg)',
});

const ColouredPosition = styled('div')({
    width: '20px', // Adjust size of the maple leaf
    height: '30px', // Adjust size of the maple leaf // URL of the maple leaf image
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundImage: 'url(/airwise/colourposition.svg)',
});

const Text = styled('div')({
    position: 'absolute',
    transform: 'translate(-50%, -150%)', // Move the text above the tube
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontFamily: 'Jost-bold'

});

const UnorderedList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    position: 'absolute',
    transform: 'translate(-50%, 0)',
});

const ListItem = styled('li')({
    marginBottom: '5px', // Adjust margin bottom for each list item
    textAlign: 'left',
    listStyle: 'none',
});

const Airplane = ({ noOfLeafsToBeRed = 1 }) => {
    return (
        <Container>
            <Text style={{ left: '12%' }}>Discover/ Define</Text>
            <Text style={{ left: '38.33%' }}>Ideate</Text>
            <Text style={{ left: '66%' }}>Prototype</Text>
            <Text style={{ left: '92%' }}>Test</Text>
            <TubeContainer>
                <DottedLine>
                    {
                        (0 < noOfLeafsToBeRed) ?
                            (noOfLeafsToBeRed > 1) ? ((<ColouredPosition style={{ left: '0%' }} />)) : (<Plane style={{ left: '0%' }} />) :
                            (<Position style={{ left: '0%' }} />)
                    }
                    {
                        (1 < noOfLeafsToBeRed) ?
                            ((noOfLeafsToBeRed > 2) ? ((<ColouredPosition style={{ left: '33.33%'}} />)) : (<Plane style={{ left: '33.33%' }} />)) :
                            (<Position style={{ left: '33.33%' }} />)
                    }
                    {
                        (2 < noOfLeafsToBeRed) ?
                            (noOfLeafsToBeRed > 3) ? ((<ColouredPosition style={{ left: '66.66%' }} />)) : (<Plane style={{ left: '66.66%' }} />) :
                            (<Position style={{ left: '66.66%' }} />)
                    }
                    {
                        (3 < noOfLeafsToBeRed) ?
                            (noOfLeafsToBeRed > 4) ? ((<ColouredPosition style={{ left: '100%' }} />)) : (<Plane style={{ left: '100%' }} />) :
                            (<Position style={{ left: '100%' }} />)
                    }
                </DottedLine>
            </TubeContainer>
            <UnorderedList style={{
                top: '60px', left: '12%', color: (0 < noOfLeafsToBeRed) ? '#D66D50' : 'black',
                fontFamily: (0 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
            }}>
                <ListItem> • User Interviews</ListItem>
                <ListItem> • Insights</ListItem>
                <ListItem> • Personas</ListItem>
            </UnorderedList>
            <UnorderedList style={{
                top: '60px', left: '38.33%', color: (1 < noOfLeafsToBeRed) ? '#D66D50' : 'black',
                fontFamily: (1 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
            }}>
                <ListItem> • Information Architecture</ListItem>
                <ListItem> • User Flows</ListItem>
            </UnorderedList>
            <UnorderedList style={{
                top: '60px', left: '66%', color: (2 < noOfLeafsToBeRed) ? '#D66D50' : 'black',
                fontFamily: (2 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
            }}>
                <ListItem> • Wireframes</ListItem>
                <ListItem> • Paper, Lo-Fi & Hi-fi</ListItem>
                <ListItem> • Responsive Design</ListItem>
            </UnorderedList>
            <UnorderedList style={{
                top: '60px', left: '88%', color: (3 < noOfLeafsToBeRed) ? '#D66D50' : 'black',
                fontFamily: (3 < noOfLeafsToBeRed) ? 'Jost-bold' : 'Jost-light-300'
            }}>
                <ListItem> • Prototype</ListItem>
                <ListItem> • Learning</ListItem>
            </UnorderedList>
        </Container>
    );
};

export default Airplane;
