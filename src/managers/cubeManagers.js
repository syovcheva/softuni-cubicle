const Cube = require('../models/Cube');
const uniqid  = require('uniqid');
const cubes = [
    {
        id: '4d3sa1z4blmw19akq',
        name: 'Mirror Cube',
        description: 'Test cube',
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAYFBMVEX///8AAADy8vKCgoI/Pz9lZWX39/f6+vr29vaqqqqIiIitra2Ojo6Tk5OLi4unp6cRERGXl5cUFBQZGRkgICC6urozMzOhoaGysrITExMKCgouLi5gYGA9PT1bW1ttbW2cK6MtAAAE7UlEQVR4nO3da2+bQBCFYbZNwQYbEtdpXXr7//+yzKwdYofL7tldoNJ5P/WK/GgGEolIm2WMMcYYY4wxxhgb6NPGSmktXszGSmw9l583UV22KbVqrdqnVNf37PWbMcc/qbRi/Z5lZhvay1dj6k/ZlyRanWsjv9qE9tItcbnrfpFC21s3oa3OndU+jONri+sO21bXVl+vc5Via/M76+ray3N3v+7efhtX+36Hbatqr8+mvpjaj9ZVtdX9XKV42uJoTNs8/ulqWrlfH6zxtGJ9nKu0krY6GXP4+E1xHG0+sMO2VbRV92nqfOAvYmjzkblKK2gHd9gWrh3bYdvi2oFnU1+oNh98NvUtrK267xEPY9ZQ7fRcpUW11Y9Ja5hW79f99L9ZULvvPs1h6NnUh2vndti2mHZ/mpmrhGrnd9i2kFaeTbNWVLuTuc7ssG0RrcMO2xCty/16awGt0w7b/LX5wXWuUnLtvnWcq+Sr3XXWZ2drcq2X1VdbHNx32JZUK9aj2w7bfLTuz6a+hNpGnk2F139x1/rusC2Ztnn22mGbqzb33mFbIq18zTn6Wl21OtfK++JZIq1a/XbY5qLVrzmQNYlWdhiYqzSvxecqRdc26FylOe2uNuYEW6NrG+x+vTWtzWt5TwdfPIusDbROa2WHQ+YqRdQG7bBtXCs7/PM16OJZRG3TBs5VGtX+lTfZZR34RryM9W6+s76EzXVSm/oHIHyLYJ3S/ioi/AhLYX5HuczvOK80xrVfolw/0n37RK1/1GrUAlELRC0QtRq1QNQCUQtErUYtELVA1AJRq1ELRC0QtUDUatQCUQtELRC1GrVA1AJRC0StRi0QtUDUAlGrUQtELRC1QNRq1AJRC0QtELUatUDUAlELRK1GLRC1QNQCUatRC0QtELVA1GrUAlELRC0QtRq1QNQCUQtErUYtELVA1AJRq1ELRC0QtUDUatQCUQtELRC1GrVA1AJRC0StRi0QtUDUAlGrUQtELRC1QNRqsbSxziuIcplfSbV6bvemSqdVa5RTRsqzCT2upC7b7tP8TaVV6/fAi9wKv29fvxlTjp7dF6qNaQ3XXuQs649nlL8VpC1GzygHC9Ne2qm5SgHa6NYwbXXurBNzlWBt1Pv1Fq6V89in5yqB2jyFFddeps5jfxekTbDDNkw792zqA7TJrJi2cpyr5K0tnM4oB/PXyv3qavXWup5RDuarreQsa6cdtnlp83Q7bPPTVt2nqb3O7vPQ5mnnKvlo/XbY5qxNvMM2d63Ps6nPUZunfDb1uWqr1vns+buctIvMVXLTVj8wq5NW71fgLGsgF62c7+x9bve1We1CO2yb1+5P6FylGe1iO2yb08qzCbfOaHcy12V22DatDdlh24R2wfv11pQ2bIdto1o9j31Z65R234bOVRrR6nnsS1vHtXGsI9risPgO24a1Yj0G7rBtQLv4s6lvSCtnlB9inO+cDWhX2mHbR23zHGeHbQ/afK0dtj1q5WtO8Hns77rT6lyreBf37l6r1kg7bHun1a85a1rvtbLDMecqvWlXn6vUa5voc5Wu2l1tzGlta69tIt+vt1Sbd1azvvWmTWVVrezwBuYqiTbNDtvMnxdjfr6mubh3T628p0szV0nf25d1lFfrwZXn7sO8JJrrm3ZDpbRmWYQfYYlaSitjjDHGGGOMMfb/9g8YYzTH/Gf2kgAAAABJRU5ErkJggg==',
        difficultyLevel: 4
    }
];

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();
    // TODO; use mongoose to filter

    if(search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }
    if(to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}
exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories')

exports.create = (cubeData) => {

    const cube = new Cube(cubeData);
    return cube.save();
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    // return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessoryId}});

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);
    return cube.save();
}