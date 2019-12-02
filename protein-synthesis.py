from typing import Dict

start_codon: str = "AUG"
stop_codon: str = "STOP"
codon_to_amino_acid: Dict[str, str] = {
  "AUG": "Met",
  "CAA": "Gln",
  "CAG": "Gln",
  "GGU": "Gly",
  "GCG": "Ala",
  "UUU": "Phe",
  "UUC": "Phe",
  "UGG": "Trp",
  "UAA": stop_codon,
  "UAG": stop_codon,
  "UGA": stop_codon,
}

def protein_synthesis_part_1(dna: str) -> str:
  # Write your code here
  # separate into 3 char mrna codons
  codons = []
  temp_codon = ''
  for char in dna:
    if len(temp_codon) < 3:
      if char == 'T':
        char = 'U'
      temp_codon += char
    else:
      is_exon = True
      for codon_char in temp_codon:
        if codon_char.islower():
          is_exon = False
          break
      if is_exon:
        codons.append(temp_codon)
      temp_codon = char
  for idx, codon in enumerate(codons):
    if codon == start_codon:
      new_codons = codons[idx:]
      break
  proteins = ''
  for codon in new_codons:
    if codon_to_amino_acid[codon] == 'STOP':
      break
    proteins += f'{codon_to_amino_acid[codon]} '
  proteins = proteins.rstrip()
  print(proteins)

protein_synthesis_part_1('uagCAAuagATGcagCAGuaaGCGugaTAA')