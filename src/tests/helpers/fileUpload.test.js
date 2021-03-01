import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dxuj1ywwo', 
    api_key: '176966955323466', 
    api_secret: 'TqLQvXyc9DbG4WA0Cq-ZrfOfCJI' 
  });

describe('Testing fileUpload', () => {
    
    test('should load a new file and return its URL', async() => {
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');

        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');

        const url = await fileUpload(file);

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(imageId);


    })
    
    test('should return an error', async() => {
        
        const file = new File([], 'foto.png');

        const url = await fileUpload(file);

        expect( url ).toBe(null)

    })
})
