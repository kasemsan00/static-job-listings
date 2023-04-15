export interface IDataArray {
  data: IData[];
}
export interface IData {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
}

// "id": 1,
// 	"company": "Photosnap",
// 	"logo": "./images/photosnap.svg",
// 	"new": true,
// 	"featured": true,
// 	"position": "Senior Frontend Developer",
// 	"role": "Frontend",
// 	"level": "Senior",
// 	"postedAt": "1d ago",
// 	"contract": "Full Time",
// 	"location": "USA Only",
// 	"languages": ["HTML", "CSS", "JavaScript"],
// 	"tools": []
//
