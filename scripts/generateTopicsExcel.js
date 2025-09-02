/*
  Generates an Excel file with topics (8–15 words) and research prompts (50–100 words).
  Output: scripts/path_to_your_excel_file.xlsx
*/

const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

const OUTPUT_PATH = path.resolve(__dirname, 'path_to_your_excel_file.xlsx');

const rows = [
  {
    Topic:
      'Cost of Living & Pet Ownership',
    Prompt:
      'How is the rising cost of living influencing pet ownership in the UK? Discuss the financial challenges pet owners face, including food, healthcare, and insurance, and explore how economic pressures are leading some to relinquish pets. Refer to recent data and trends reported by GlobalPETS.'
  },
  {
    Topic: 'Pet Care & Welfare in a Changing Society',
    Prompt:
      'With pet welfare becoming a bigger concern, what are the key responsibilities of modern pet owners? Explore everyday care needs while also addressing troubling trends like the increase in reported cruelty cases since 2020. What role do communities, shelters, and legislation play in protecting pets?'
  },
  {
    Topic: 'The Numbers Behind Pet Ownership',
    Prompt:
      'Use recent statistics to examine the scale of pet ownership in the UK. Which animals are most popular? Why do breeds like the Labrador Retriever remain at the top? Highlight shifts in ownership patterns and how they reflect cultural, economic, and lifestyle changes.'
  },
  {
    Topic:
      'Beyond Cats and Dogs: Small Mammals & Birds',
    Prompt:
      'Hamsters, guinea pigs, and indoor birds have long been staples of UK households. Why are these smaller pets appealing in today’s economy? Discuss their care requirements, affordability, and the role they play in family life compared to larger pets.'
  },
  {
    Topic: 'Exotic Appeal: Reptiles & Fish as Pets',
    Prompt:
      'Explore the growing popularity of reptiles and fish as pets. What draws people to lizards, snakes, tortoises, turtles, and aquariums? Consider both the attraction and the challenges of keeping these animals, from habitat setup to specialized care.'
  },
  {
    Topic: 'The Booming Pet Services Industry',
    Prompt:
      'Pet spending continues to grow, from grooming to luxury products. How is the UK pet industry evolving to meet new demands? Highlight trends in pet tech, premium food, and wellness services, and discuss whether the market is resilient to economic downturns.'
  }
  
];

function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeExcel(outputPath, dataRows) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(dataRows, {
    header: ['Topic', 'Prompt']
  });
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Topics');
  XLSX.writeFile(workbook, outputPath);
}

function main() {
  ensureDirectoryExists(OUTPUT_PATH);
  writeExcel(OUTPUT_PATH, rows);
  console.log(`Wrote Excel to: ${OUTPUT_PATH}`);
}

main();


