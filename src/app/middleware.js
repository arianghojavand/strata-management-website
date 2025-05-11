export function middleware(request) {
  const hour = new Date().getHours();
  if (hour >= 3 && hour < 4) {
    return new NextResponse("We're sleeping! Try again after 5am.", { status: 503 });
  }

  const country = request.geo?.country || 'US';
  if (country !== 'AU') {
    return NextResponse.redirect(new URL('/not-available.html', request.url));
  }

}