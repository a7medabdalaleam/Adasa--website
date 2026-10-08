import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface Author {
  name: string;
  role: string;

  photoId: string;
}
@Component({
  selector: 'app-us',
  imports: [RouterLink],
  templateUrl: './us.html',
  styleUrl: './us.css',
})
export class Us {
  readonly authors: readonly Author[] = [
    { name: 'سالم أحمد', role: 'مصور محترف', photoId: '1507003211169-0a1dd7228f2d' },
    { name: 'محمد علي', role: 'مصور بورتريه', photoId: '1500648767791-00dcc994a43e' },
    { name: 'إبراهيم حسن', role: 'مصور طبيعة', photoId: '1472099645785-5658abf4ff4e' },
    { name: 'داود خالد', role: 'مدرب تصوير', photoId: '1560250097-0b93528c311a' },
    { name: 'ليث محمود', role: 'فنان بصري', photoId: '1506794778202-cad84cf45f1d' },
    { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', photoId: '1463453091185-61582044d556' },
    { name: 'خالد الفيصل', role: 'مصور فلكي', photoId: '1519085360753-af0119f7cbe7' },
    { name: 'نادر سعيد', role: 'مصور شوارع', photoId: '1566492031773-4f4e44671857' },
    { name: 'هاني الشمري', role: 'مصور طعام', photoId: '1552058544-f2b08422138a' },
    { name: 'عمر الراشد', role: 'مصور حياة برية', photoId: '1507591064344-4c6ce005b128' },
    { name: 'فارس العلي', role: 'فنان فوتوغرافي', photoId: '1570295999919-56ceb5ecca61' },
    { name: 'سامي الحربي', role: 'خبير تعديل صور', photoId: '1568602471122-7832951cc4c5' },
    { name: 'رامي الخطيب', role: 'مصور ماكرو', photoId: '1548372290-8d01b6c8e78c' },
    { name: 'باسم المصري', role: 'مصور فني', photoId: '1583195764036-6dc248ac07d9' },
    { name: 'منصور الزهراني', role: 'مصور زفاف', photoId: '1564564321837-a57b7070ac4f' },
    { name: 'فيصل الدوسري', role: 'مصور جوي', photoId: '1618077360395-f3068be8e001' },
    { name: 'لؤي الصالح', role: 'مصور تجاري', photoId: '1633332755192-727a05c4013d' },
    { name: 'طارق النعيمي', role: 'مصور معماري', photoId: '1607990281513-2c110a25bd8c' },
    { name: 'أحمد الشهري', role: 'مصور رياضي', photoId: '1580518324671-c2f0833a3af3' },
    { name: 'ماجد القحطاني', role: 'مصور استوديو', photoId: '1543610892-0b1f7e6d8ac1' },
    { name: 'ياسر العتيبي', role: 'مصور رحالة', photoId: '1590086782957-93c06ef21604' },
    { name: 'دحام الحسيني', role: 'فنان بصري', photoId: '1504257432389-52343af06ae3' },
    { name: 'نايف المطيري', role: 'مصور مواليد', photoId: '1492562080023-ab3db95bfbce' },
    { name: 'عبدالله الغامدي', role: 'مصور عقارات', photoId: '1539571696357-5a69c17a67c6' },
    { name: 'كريم الفهد', role: 'خبير تقني', photoId: '1534030347209-467a5b0ad3e6' },
    { name: 'سلطان الراجحي', role: 'فنان تصوير', photoId: '1557862921-37829c790f19' },
    { name: 'فهد السبيعي', role: 'مراجع معدات', photoId: '1531891437562-4301cf35b7e4' },
    { name: 'راشد الجاسر', role: 'فنان بصري', photoId: '1545167622-3a6ac756afa4' },
  ];

  avatarUrl(photoId: string): string {
    return `https://images.unsplash.com/photo-${photoId}?w=100&h=100&fit=crop&crop=face`;
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.visibility = 'hidden';
  }
}
