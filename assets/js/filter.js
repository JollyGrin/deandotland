export const filterText = (string) => {
    if (string.includes(completeBan)) {
      return;
    }
  
    ban.forEach((word) => {
      string = string.replace(word, '');
    });
    return string;
  };
  
  const ban = [
    'Blender:',
    'Blender'
  ];
  
  const completeBan = 'Brightlands Smart Services Campus with a Mavic Air';
  