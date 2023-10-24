const questions = [
    // Your questions and answers here...
    {
        question: "1. Which of these is not a step in natural selection?",
        options: ["a. variation", "b. underpopulation", "c. struggle for existence", "d. survival of the fittest"],
        answer: "b. underpopulation"
    },
    {
        question: "2. Which of these is not a characteristic of fitness?",
        options: ["a. Fitness is environment-specific.", "b. Fitness is species-specific.", "c. Higher reproductive rate means higher fitness.", "d. Fitness should be measured across several generations."],
        answer: "c. Higher reproductive rate means higher fitness."
    },
    {
        question: "3. Ecology is the scientific study of ___ that determine the distribution and abundance of organisms. (Fill in the blanks)",
        options: ["a. statics", "b. interactions", "c. dynamics", "d. habitat"],
        answer: "b. interactions"
    },
    {
        question: "4. Which of these is not a characteristic of fitness?",
        options: ["a. Fitness is environment-specific.", "b. Fitness is species-specific.", "c. Fitness works on traits such as size and speed.", "d. Fitness should be measured across several generations."],
        answer: "c. Fitness works on traits such as size and speed."
    },
    {
        question: "5. In the Greek word root of Ecology, Oikos refers to",
        options: ["a. household", "b. preservation", "c. environment", "d. study"],
        answer: "a. household"
    },
    {
        question: "6. 'Enquiry into plants' is a book written by",
        options: ["a. Theophrastus", "b. Linnaeus", "c. Malthus", "d. Humboldt"],
        answer: "a. Theophrastus"
    },
    {
        question: "7. In the Greek word root of Ecology, logos refers to",
        options: ["a. household", "b. preservation", "c. environment", "d. study"],
        answer: "d. study"
    },
    {
        question: "8. Which of these is not a kind of selection",
        options: ["a. directional", "b. stochastic", "c. disruptive", "d. stabilising"],
        answer: "b. stochastic"
    },
    {
        question: "9. Who amongst these is considered the father of Biogeography?",
        options: ["a. Theophrastus", "b. Linnaeus", "c. Malthus", "d. Humboldt"],
        answer: "d. Humboldt"
    },
    {
        question: "10. Ecology is the scientific study of interactions among organisms and their ___. (Fill in the blanks)",
        options: ["a. habitat", "b. niche", "c. environment", "d. population"],
        answer: "c. environment"
    },
    {
        question: "11. Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are ___ (Fill in the blank)",
        options: ["a. perfect", "b. imperfect", "c. stable", "d. unstable"],
        answer: "c. stable"
    },
    {
        question: "12. The mitochondrion is a / an",
        options: ["a. Sub-cellular organelle", "b. Cell", "c. Tissue", "d. Organ"],
        answer: "a. Sub-cellular organelle"
    },
    {
        question: "13. The hierarchical system was given by",
        options: ["a. Simon", "b. Watson", "c. Hutchinson", "d. Humboldt"],
        answer: "a. Simon"
    },
    {
        question: "14. There is more biodiversity in areas with",
        options: ["a. less competition, less predation", "b. less competition, more predation", "c. more competition, more predation", "d. more competition, less predation"],
        answer: "c. more competition, more predation"
    },
    {
        question: "15. 'Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups' is a definition of",
        options: ["a. cells", "b. species", "c. ecosystems", "d. biomes"],
        answer: "b. species"
    },
    {
        question: "'16. The diversity that exists within an ecosystem' is",
        options: ["a. alpha (α) biodiversity", "b. beta (β) biodiversity", "c. gamma (γ) biodiversity", "d. delta (δ) biodiversity"],
        answer: "a. alpha (α) biodiversity"
    },
    {
        question: "17. 'The diversity that exists among different geographies' is",
        options: ["a. alpha (α) biodiversity", "b. beta (β) biodiversity", "c. gamma (γ) biodiversity", "d. delta (δ) biodiversity"],
        answer: "c. gamma (γ) biodiversity"
    },
    {
        question: "18. The emergent principle can be stated as",
        options: ["a. Whole = sum of parts", "b. Whole < sum of parts", "c. Whole > sum of parts", "d. None of these"],
        answer: "c. Whole > sum of parts"
    },
    {
        question: "19. The laboratory approach to Ecology uses",
        options: ["a. equations", "b. models", "c. observations", "d. experiments"],
        answer: "d. experiments"
    },
    {
        question: "20. For more biodiversity, the level of disturbance should be",
        options: ["a. less", "b. intermediate", "c. more", "d. none of these"],
        answer: "b. intermediate"
    },
    {
        question: "21. Egrets with buffaloes are an example of",
        options: ["a. colony", "b. commensalism", "c. protocooperation", "d. allelopathy"],
        answer: "b. commensalism"
    },
    {
        question: "22. I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called",
        options: ["a. tick hunting", "b. auto grooming", "c. allo grooming", "d. foraging"],
        answer: "c. allo grooming"
    },
    {
        question: "23. Birds on giraffes are an example of",
        options: ["a. colony", "b. commensalism", "c. protocooperation", "d. allelopathy"],
        answer: "c. protocooperation"
    },
    {
        question: "24. Harmonious interactions occur where",
        options: ["a. at least one participant is benefited", "b. at least one participant is unharmed", "c. both participants are benefitted", "d. both participants are unharmed"],
        answer: "d. both participants are unharmed"
    },
    {
        question: "25. I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called",
        options: ["a. tick hunting", "b. auto grooming", "c. allo grooming", "d. foraging"],
        answer: "c. allo grooming"
    },
    {
        question: "26. The interaction between exotic shrubs and trees through the action of seed predators is an example of",
        options: ["a. infraspecific competition", "b. apparent competition", "c. disguised competition", "d. harmonious competition"],
        answer: "b. apparent competition"
    },
    {
        question: "27. Trampling of grass due to the movement of animals is an example of",
        options: ["a. mutualism", "b. amensalism", "c. commensalism", "d. protocooperation"],
        answer: "b. amensalism"
    },
    {
        question: "28. The scientific study of animal behavior is called",
        options: ["a. behaviorism", "b. ecology", "c. ethology", "d. prey-predator dynamics"],
        answer: "c. ethology"
    },
    {
        question: "29. An inventory of behaviors exhibited by an animal during a behavior exercise is called",
        options: ["a. ecogram", "b. ethogram", "c. behaviourogram", "d. animalogram"],
        answer: "b. ethogram"
    },
    {
        question: "30. Hamilton's rule can be stated as",
        options: ["a. rB < C", "b. rB > C", "c. rB = C", "d. rB + C = 0"],
        answer: "b. rB > C"
    },
    {
        question: "31. If we all became vegetarians, we'll be able to support our large populations. This can be explained through",
        options: ["a. 10% rule", "b. 1% rule", "c. trophic cascade", "d. biodiversity"],
        answer: "a. 10% rule"
    },
    {
        question: "32. Trees → Birds → Parasites → Hyperparasites represents",
        options: ["a. upright pyramid of numbers", "b. inverted pyramid of numbers", "c. spindle pyramid of numbers", "d. dumb-bell pyramid of numbers"],
        answer: "b. inverted pyramid of numbers"
    },
    {
        question: "33. Net primary productivity is given by",
        options: ["a. APAR × LUE", "b. APAR + LUE", "c. APAR - LUE", "d. APAR / LUE"],
        answer: "a. APAR × LUE"
    },
    {
        question: "34. At the compensation point,",
        options: ["a. photosynthesis = respiration", "b. photosynthesis < respiration", "c. photosynthesis > respiration", "d. photosynthesis = 0"],
        answer: "a. photosynthesis = respiration"
    },
    {
        question: "35. Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",
        options: ["a. available energy decreases", "b. available energy increases", "c. available energy remains the same", "d. available energy is zero everywhere"],
        answer: "a. available energy decreases"
    },
    {
        question: "36. Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
        options: ["a. more number of hawks than grasshoppers can be supported", "b. more number of grasshoppers than hawks can be supported", "c. equal number of hawks and grasshoppers can be supported", "d. none of these"],
        answer: "b. more number of grasshoppers than hawks can be supported"
    },
    {
        question: "37. Tree → Frugivorous birds → Hawk represents",
        options: ["a. upright pyramid of numbers", "b. inverted pyramid of numbers", "c. spindle pyramid of numbers", "d. dumb-bell pyramid of numbers"],
        answer: "b. inverted pyramid of numbers"
    },
    {
        question: "38. Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
        options: ["a. hawk is producer", "b. hawk is consumer and carnivore", "c. hawk is consumer and herbivore", "d. hawk is decomposer"],
        answer: "b. hawk is consumer and carnivore"
    },
    {
        question: "39. Glacial lakes are typical examples of",
        options: ["a. eutrophic lakes", "b. hypereutrophic lakes", "c. oligotrophic lakes", "d. mesotrophic lakes"],
        answer: "c. oligotrophic lakes"
    },
    {
        question: "40. Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. In this food chain,",
        options: ["a. frog is producer", "b. frog is consumer and carnivore", "c. frog is consumer and herbivore", "d. frog is decomposer"],
        answer: "b. frog is consumer and carnivore"
    },
    
    {
        question: "41. The juvenile mortality rate is the annual number of deaths of juveniles per",
        options: ["a. 100 births", "b. 1000 births", "c. 100 live births", "d. 1000 live births"],
        answer: "b. 1000 births"
    },
    {
        question: "42. Pan traps are used for sampling",
        options: ["a. bees", "b. butterflies", "c. non-pollinator insects", "d. pollinator insects"],
        answer: "d. pollinator insects"
    },
    {
        question: "43. ___ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start.",
        options: ["a. Simple random sampling", "b. Systematic sampling", "c. Stratified sampling", "d. Multistage sampling"],
        answer: "b. Systematic sampling"
    },
    {
        question: "44. Which of these is not a measure of absolute population density?",
        options: ["a. total count", "b. pelt count", "c. capture-recapture method", "d. removal method"],
        answer: "b. pelt count"
    },
    {
        question: "45. The logistic growth equation, when plotted, appears",
        options: ["a. I shaped", "b. J shaped", "c. S shaped", "d. O shaped"],
        answer: "c. S shaped"
    },
    {
        question: "46. A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
        options: ["a. Simple random sampling", "b. Systematic sampling", "c. Stratified sampling", "d. Multistage sampling"],
        answer: "a. Simple random sampling"
    },
    {
        question: "47. The minimum replacement level fertility for a population to grow should be greater than",
        options: ["a. 1", "b. 2", "c. 3", "d. 4"],
        answer: "b. 2"
    },
    {
        question: "48. Cover board surveys are typically used for sampling",
        options: ["a. herpetofauna", "b. fishes", "c. large mammals", "d. carnivores"],
        answer: "a. herpetofauna"
    },
    {
        question: "49. Which of these is true?",
        options: ["a. Physiological longevity > Ecological longevity", "b. Physiological longevity = Ecological longevity", "c. Physiological longevity < Ecological longevity", "d. a or b"],
        answer: "d. a or b"
    },
    {
        question: "50. ___ is how close the measured values are to the correct value.",
        options: ["a. Accuracy", "b. Precision", "c. Bias", "d. Variance"],
        answer: "a. Accuracy"
    },
    {
        question: "51. Importance value can be written as",
        options: ["a. Relative density + Relative frequency X Relative dominance", "b. Relative density X Relative frequency + Relative dominance", "c. Relative density + Relative frequency + Relative dominance", "d. Relative density X Relative frequency X Relative dominance"],
        answer: "c. Relative density + Relative frequency + Relative dominance"
    },
    {
        question: "52. A species found most frequently in a particular community, but also present occasionally in others is called",
        options: ["a. accidental species", "b. indifferent species", "c. selective species", "d. exclusive species"],
        answer: "c. selective species"
    },
    {
        question: "53. When compared to generalist species, specialist species have",
        options: ["a. narrower niches", "b. broader niches", "c. same-size niches", "d. none of these"],
        answer: "a. narrower niches"
    },
    {
        question: "54. A climax caused by wildfires is an example of",
        options: ["a. climatic climax", "b. edaphic climax", "c. disclimax", "d. catastrophic climax"],
        answer: "d. catastrophic climax"
    },
    {
        question: "55. Lithosere is an example of",
        options: ["a. hydrosere", "b. xerosere", "c. psammosere", "d. halosere"],
        answer: "b. xerosere"
    },
    {
        question: "56. Which of these is correct?",
        options: ["a. Fundamental niche > Realised niche", "b. Fundamental niche = Realised niche", "c. Fundamental niche < Realised niche", "d. a or b"],
        answer: "d. a or "
    },
    {
        question: "57. Importance value varies from",
        options: ["a. 0 to 10", "b. 0 to 50", "c. 0 to 100", "d. 0 to 300"],
        answer: "d. 0 to 300"
    },
    {
        question: "58. The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
        options: ["a. climatic climax", "b. edaphic climax", "c. disclimax", "d. catastrophic climax"],
        answer: "c. disclimax"
    },
    {
        question: "59. Which of these is not a characteristic of pioneer species",
        options: ["a. ability to grow on bare rocks", "b. ability to tolerate extreme temperatures", "c. large size", "d. short life span"],
        answer: "c. large size"
    },
    {
        question: "60. Which of these depicts correctly the lithosere primary succession?",
        options: ["a. Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax", "b. Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax", "c. Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax", "d. Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax"],
        answer: "a. Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax"
    },
    {
        question: "61. 'The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.' This is the statement for",
        options: ["a. Liebig’s law of the minimum", "b. Liebig’s law of the maximum", "c. Shelford’s law of tolerance", "d. Shelford’s law of intolerance"],
        answer: "c. Shelford’s law of tolerance"
    },
    {
        question: "62. Transplantation experiments are used to find",
        options: ["a. potential range", "b. effective range", "c. actual range", "d. economic range"],
        answer: "a. potential range"
    },
    {
        question: "63. Good climate is a",
        options: ["a. chemical factor", "b. demographic factor", "c. push factor", "d. pull factor"],
        answer: "d. pull factor"
    },
    {
        question: "64. 'The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.' This is the statement for",
        options: ["a. Liebig’s law of the minimum", "b. Liebig’s law of the maximum", "c. Shelford’s law of tolerance", "d. Shelford’s law of intolerance"],
        answer: "a. Liebig’s law of the minimum"
    },
    {
        question: "65. I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
        options: ["a. autophagy", "b. allelophagy", "c. autopathy", "d. allelopathy"],
        answer: "d. allelopathy"
    },
    {
        question: "66. 'Quick movement over large distances, often across unsuitable terrain' is a description of",
        options: ["a. diffusion", "b. secular dispersal", "c. jump dispersal", "d. drifting"],
        answer: "c. jump dispersal"
    },
    {
        question: "67. The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
        options: ["a. translocation", "b. migration", "c. dispersal", "d. drifting"],
        answer: "c. dispersal"
    },
    {
        question: "68. The movement of lions across the Gir landscape is an example of",
        options: ["a. diffusion", "b. secular dispersal", "c. jump dispersal", "d. drifting"],
        answer: "a. diffusion"
    },
    {
        question: "69. Which of these is not a physical factor of habitat?",
        options: ["a. soil", "b. moisture", "c. predators", "d. temperature"],
        answer: "c. predators"
    },
    {
        question: "70. Scarcity of food is a",
        options: ["a. chemical factor", "b. demographic factor", "c. push factor", "d. pull factor"],
        answer: "c. push factor"
    },
    {
        question: "71. The “subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce” is the definition of",
        options: ["a. habitat", "b. ecosystem", "c. biome", "d. biosphere"],
        answer: "a. habitat"
    },
    {
        question: "72. According to Leopold, which of these is not a tool of habitat management?",
        options: ["a. fire", "b. gun", "c. cattle", "d. sickle"],
        answer: "d. sickle"
    },
    {
        question: "73. Zoo is an example of",
        options: ["a. in-situ conservation", "b. ex-situ conservation", "c. in-situ preservation", "d. ex-situ preservation"],
        answer: "b. ex-situ conservation"
    },
    {
        question: "74. The acronym HIPPO does not include",
        options: ["a. habitat loss", "b. invasive species", "c. pollination", "d. pollution"],
        answer: "c. pollination"
    },
    {
        question: "75. We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: ["a. very high", "b. medium", "c. very low", "d. non-existent"],
        answer: "b. medium"
    },
    {
        question: "76. Which of these is a deterministic factor?",
        options: ["a. environmental variation", "b. forest fire", "c. death rate", "d. diseases"],
        answer: "c. death rate"
    },
    {
        question: "77. Captive breeding is an example of",
        options: ["a. in-situ conservation", "b. ex-situ conservation", "c. in-situ preservation", "d. ex-situ preservation"],
        answer: "b. ex-situ conservation"
    },
    {
        question: "78. Which of these is a stochastic factor?",
        options: ["a. birth rate", "b. death rate", "c. population structure", "d. environmental fluctuation"],
        answer: "d. environmental fluctuation"
    },
    {
        question: "79. Which of these correctly represents the process of habitat fragmentation and loss?",
        options: ["a. Original forest → Dissection → Perforation → Fragmentation → Attrition", "b. Original forest → Dissection → Attrition → Fragmentation → Perforation", "c. Original forest → Dissection → Perforation → Attrition → Fragmentation", "d. Original forest → Dissection → Fragmentation → Perforation → Attrition"],
        answer: "a. Original forest → Dissection → Perforation → Fragmentation → Attrition"
    },
    {
        question: "80. The acronym HIPPO does not include",
        options: ["a. habitat loss", "b. habitat enhancement", "c. invasive species", "d. human over-population"],
        answer: "b. habitat enhancement"
    },
    {
        question: "81. According to Malthusian model,",
        options: ["a. Population grows in geometric progression, food supply increases in arithmetic progression", "b. Population grows in geometric progression, food supply increases in geometric progression", "c. Population grows in arithmetic progression, food supply increases in arithmetic progression", "d. Population grows in arithmetic progression, food supply increases in geometric progression"],
        answer: "a. Population grows in geometric progression, food supply increases in arithmetic progression"
    },
    {
        question: "82. Which of these is not a pillar of sustainability?",
        options: ["a. environmental sustainability", "b. economic sustainability", "c. trans-boundary sustainability", "d. social sustainability"],
        answer: "c. trans-boundary sustainability"
    },
    {
        question: "83. The quantum of human impacts is given by",
        options: ["a. I = P × A × T", "b. I = P + A + T", "c. I = P + A - T", "d. I = P - (A + T)"],
        answer: "a. I = P × A × T"
    },
    {
        question: "84. Which of these is a positive check according to Malthus?",
        options: ["a. late marriage", "b. war", "c. celibacy", "d. moral restraint"],
        answer: "b. war"
    },
    {
        question: "85. Which of these is a pillar of sustainability",
        options: ["a. social sustainability", "b. industrial sustainability", "c. agricultural sustainability", "d. trans-boundary sustainability"],
        answer: "a. social sustainability"
    },
    {
        question: "86. ___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
        options: ["a. screening", "b. scoping", "c. reporting", "d. review"],
        answer: "b. scoping"
    },
    {
        question: "87. ___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
        options: ["a. screening", "b. scoping", "c. reporting", "d. review"],
        answer: "a. screening"
    },
    {
        question: "88. The demographic transition sees a society move from",
        options: ["a. high birth rate, low death rate to low birth rate, low death rate", "b. low birth rate, high death rate to low birth rate, low death rate", "c. high birth rate, high death rate to low birth rate, low death rate", "d. high birth rate, high death rate to low birth rate, high death rate"],
        answer: "c. high birth rate, high death rate to low birth rate, low death rate"
    },
    {
        question: "89. The book 'An Essay on the Principle of Population' was written by",
        options: ["a. Darwin", "b. Malthus", "c. Spencer", "d. Owens"],
        answer: "b. Malthus"
    },
    {
        question: "90. Which of these is a preventive check according to Malthus?",
        options: ["a. foresight", "b. vice", "c. misery", "d. flood"],
        answer: "a. foresight"
    },
    {
        question: "91. “Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead” is a definition for",
        options: ["a. adaptation", "b. mitigation", "c. maladaptation", "d. malmitigation"],
        answer: "c. maladaptation"
    },
    {
        question: "92. Macrodebris in the context of plastic debris has fragments of size",
        options: ["a. > 20 mm", "b. 5 - 20 mm", "c. < 5 mm", "d. < 1 mm"],
        answer: "a. > 20 mm"
    },
    {
        question: "93. Which of these is not a climatic forcing for Earth?",
        options: ["a. changes in plate tectonics", "b. changes in Earth's orbit", "c. changes in Sun's orbit", "d. changes in Sun's strength"],
        answer: "c. changes in Sun's orbit"
    },
    {
        question: "94. “The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences” is a definition for",
        options: ["a. adaptive response", "b. adaptive capacity", "c. mitigative response", "d. mitigative capacity"],
        answer: "b. adaptive capacity"
    },
    {
        question: "95. Which of these is not a climatic forcing for Earth?",
        options: ["a. changes in plate tectonics", "b. changes in Earth's orbit", "c. changes in Moon's orbit", "d. changes in Sun's strength"],
        answer: "c. changes in Moon's orbit"
    },
    {
        question: "96. Which of these is not a principle of ecological restoration?",
        options: ["a. ecological integrity", "b. long-term sustainability", "c. benefits and engages scientists", "d. informed by past and future"],
        answer: "c. benefits and engages scientists"
    },
    {
        question: "97. Mesodebris in the context of plastic debris has fragments of size",
        options: ["a. > 20 mm", "b. 5 - 20 mm", "c. < 5 mm", "d. < 1 mm"],
        answer: "b. 5 - 20 mm"
    },
    {
        question: "98. The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called",
        options: ["a. adaptation", "b. mitigation", "c. deceleration", "d. maladaptation"],
        answer: "b. mitigation"
    },
    {
        question: "99. Which of these is not a principle of ecological restoration?",
        options: ["a. ecological integrity", "b. short-term sustainability", "c. benefits and engages society", "d. informed by past and future"],
        answer: "b. short-term sustainability"
    },
    {
        question: "100. Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
        options: ["a. adaptation", "b. mitigation", "c. deceleration", "d. maladaptation"],
        answer: "a. adaptation"
    },
    {
        question: "101. Ludwig's ratchet predicts",
        options: ["a. decreasing harvesting rate", "b. constant harvesting rate", "c. increasing harvesting rate", "d. fluctuating harvesting rate"],
        answer: "c. increasing harvesting rate"
    },
    {
        question: "102. Which of these is correct?",
        options: ["a. R + G = M + F", "b. R + M = G + F", "c. R + F = M + G", "d. R + G + M + F = 0"],
        answer: "a. R + G = M + F"
    },
    {
        question: "103. A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
        options: ["a. recovery", "b. restoration", "c. enhancement", "d. replacement"],
        answer: "b. restoration"
    },
    {
        question: "104. A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
        options: ["a. recovery", "b. restoration", "c. enhancement", "d. replacement"],
        answer: "d. replacement"
    },
    {
        question: "105. A root zone treatment plant is an example of",
        options: ["a. phytoremediation", "b. biological control", "c. biomagnification", "d. bioaccumulation"],
        answer: "a. phytoremediation"
    },
    {
        question: "106. A pest population is called controlled when",
        options: ["a. it is not increasing", "b. it is decreasing", "c. it is not causing any economic damage", "d. it is not causing excessive economic damage"],
        answer: "d. it is not causing excessive economic damage"
    },
    {
        question: "107. Which of these is not an impact of toxic chemicals?",
        options: ["a. lethal effects", "b. sub-lethal effects", "c. reduction of existing stressors", "d. reduced fecundity"],
        answer: "c. reduction of existing stressors"
    },
    {
        question: "108. Which of these is correct?",
        options: ["a. The maximum sustainable yield is near the beginning of the sigmoidal curve.", "b. The maximum sustainable yield is near the mid-point of the sigmoidal curve.", "c. The maximum sustainable yield is near the end of the sigmoidal curve.", "d. None of these."],
        answer: "b. The maximum sustainable yield is near the mid-point of the sigmoidal curve."
    },
    {
        question: "109. The impact of El Nino on fishery collapse in Peru is explained by",
        options: ["a. match hypothesis", "b. mismatch hypothesis", "c. match-mismatch hypothesis", "d. none of these"],
        answer: "c. match-mismatch hypothesis"
    },
    {
        question: "110. A pest population is called uncontrolled when",
        options: ["a. it is increasing", "b. it is not decreasing", "c. it is causing some economic damage", "d. it is causing excessive economic damage"],
        answer: "d. it is causing excessive economic damage"
    },
    {
        question: "111. At the compensation point,",
        options: ["a. photosynthesis = respiration", "b. photosynthesis < respiration", "c. photosynthesis > respiration", "d. photosynthesis = 0"],
        answer: "a. photosynthesis = respiration"
    },
    {
        question: "112. Birds on giraffe are an example of",
        options: ["a. colony", "b. commensalism", "c. protocooperation", "d. allelopathy"],
        answer: "c. protocooperation"
    },
    {
        question: "113. Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
        options: ["a. adaptation", "b. mitigation", "c. deceleration", "d. maladaptation"],
        answer: "a. adaptation"
    },
    {
        question: "114. Which of these is a stochastic factor?",
        options: ["a. birth rate", "b. death rate", "c. population structure", "d. environmental fluctuation"],
        answer: "d. environmental fluctuation"
    },
    {
        question: "115. The mitochondrion is a/an",
        options: ["a. Sub-cellular organelle", "b. Cell", "c. Tissue", "d. Organ"],
        answer: "a. Sub-cellular organelle"
    },
    {
        question: "116. Which of these is correct?",
        options: ["a. Fundamental niche > Realised niche", "b. Fundamental niche = Realised niche", "c. Fundamental niche < Realised niche", "d. a or b"],
        answer: "d. a or b"
    },
    {
        question: "117. The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
        options: ["a. translocation", "b. migration", "c. dispersal", "d. drifting"],
        answer: "c. dispersal"
    },
    {
        question: "118. The book 'An Essay on the Principle of Population' was written by",
        options: ["a. Darwin", "b. Malthus", "c. Spencer", "d. Owens"],
        answer: "b. Malthus"
    },
    {
        question: "119. Which of these is not a step in natural selection?",
        options: ["a. variation", "b. underpopulation", "c. struggle for existence", "d. survival of the fittest"],
        answer: "b. underpopulation"
    },
    {
        question: "120. The logistic growth equation, when plotted, appears",
        options: ["a. I shaped", "b. J shaped", "c. S shaped", "d. O shaped"],
        answer: "c. S shaped"
    }
    

];

const quizForm = document.getElementById("quiz-form");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const scoreDisplay = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    if (question) {
        const optionsHTML = question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}" required>
                ${option}
            </label>
        `).join('');

        quizForm.innerHTML = `
            <h2>${question.question}</h2>
            ${optionsHTML}
        `;
    } else {
        quizForm.innerHTML = "<h2>Quiz completed. Submit to see your score.</h2>";
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }
        selectedAnswer.checked = false;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            nextButton.style.display = "none";
            submitButton.style.display = "block";
        }
    }
}

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkAnswer();
});

nextButton.addEventListener("click", () => {
    checkAnswer();
});

submitButton.addEventListener("click", () => {
    scoreDisplay.textContent = `${score} / ${questions.length}`;
    scoreDisplay.style.display = "block";
    quizForm.style.display = "none";
    submitButton.style.display = "none";
});

loadQuestion();
