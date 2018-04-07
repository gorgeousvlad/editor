export function importFiles(context) {
  let images = {};
  context.keys().map((item, index) => { images[item.replace('./', '')] = context(item); });
  return images;
}

